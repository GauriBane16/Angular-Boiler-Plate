import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CommonService } from './common.service';
import { ApiListService } from './api-list.service';
import * as $ from 'jquery';// import Jquery here 
@Injectable({
  providedIn: 'root'
})
export class HighchartsService {
  totalValue: number;
  data1: any;
  userWiseClasificationData: any;
  linechartData: any;
  categories_linechart: any;
  charts = [];

  returnData: any;

  defaultOptions = {
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        },
        showInLegend: false
      }
    },
    credits: {
      enabled: false
    },
    series: [],

  }

  UserWiseClasification = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        },
        showInLegend: true
      }
    },
    legend: {
      useHTML: true,
      itemMarginBottom: 30,
      labelFormatter: function () {
        var description = this.name + '<br>' + this.count;
        return description;
      }
    },
    subtitle: {
      verticalAlign: '',
      x: 0,
      y: 0,
      itemMarginBottom: 0,
      text: ''
    },

    credits: {
      enabled: false
    },
    series: [{
      name: 'Users',
      colorByPoint: true,
      data: null
    }]
  }

  chart = {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  };
  subtitle = {
    text: 'All Users',
    align: 'center',
    verticalAlign: 'middle',
    //  y:60
  };

  plotOptions = {
    pie: {
      center: ['50%', '50%'],
      size: '100%',
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f} %',
        distance: -24,
        filter: {
          property: 'percentage',
          operator: '>',
          value: 4
        },
        style: {
          fontWeight: 'bold',
          color: 'white'
        }
      },
      showInLegend: true,
      allowPointSelect: true,
      cursor: 'pointer'
    }
  };
  HospitalInformation = {
    chart: this.chart,
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: this.plotOptions,
    subtitle: {
      text: ''
    },

    credits: {
      enabled: false
    },

    series: []

  }



  constructor(public commonService: CommonService,
    public apiListService: ApiListService) { }



  getDashoardUserWiseClassification() {
    this.commonService.apiCall(this.apiListService.getDashboardUserWiseClassification, { id: this.commonService.loggedInUser.id })
      .then((res: any) => {
        this.userWiseClasificationData = res.result.data;
        this.totalValue = res.result.total;

      })
      .catch(err => { });
  }

  createUserWiseClasificationChart() {
    return new Promise((resolve, reject) => {
      this.commonService.apiCall(this.apiListService.getDashboardUserWiseClassification, { id: this.commonService.loggedInUser.id })
        .then((res: any) => {
          if (res.status.code != '00')
            reject(true);
          else {
            this.UserWiseClasification.subtitle = {
              verticalAlign: 'top',
              x: 0,
              y: 370,
              itemMarginBottom: 30,
              text: '<b>Total : ' + res.result.total + '</b>'
            },
              this.UserWiseClasification.plotOptions.pie.showInLegend = true;
            this.UserWiseClasification.series[0].data = res.result.data;
            resolve(this.UserWiseClasification);
          }

        })
        .catch(err => {
          reject(true);
        });

    });
  }

  createHospitalInformationChart(hospital_id) {
    var chartList = []
    var requestData;

    if (hospital_id != "null") {
      requestData = {
        id: this.commonService.loggedInUser.id,
        hospital_id: hospital_id
      }
    }
    else {
      requestData = {
        id: this.commonService.loggedInUser.id,
      }
    }
    return new Promise((resolve, reject) => {
      this.commonService.apiCall(this.apiListService.getDashboardHospitalInformation, requestData)
        .then((res: any) => {
          if (res.status.code != '00')
            reject(true);
          else {
            var hospital_data = res.result;

            for (var i = 0; i < hospital_data.length; i++) {
              var HospitalInformation = {
                chart: this.chart,
                title: {
                  text: hospital_data[i].hospital_name
                },

                tooltip: {
                  pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: this.plotOptions,
                subtitle: this.subtitle,
                credits: {
                  enabled: false
                },

                series: [
                  {
                    name: hospital_data[i].hospital_name,
                    showInLegend: true,
                    data: hospital_data[i].data,
                    innerSize: '50%',
                    type: 'pie',
                  }
                ]

              }
              chartList.push(HospitalInformation);
            }
          }
          resolve(chartList);
        })
        .catch(err => {
        });
    });
  }

  createChart(reqData) {
    var chartOptions = {
      title: {
        text: ''
      },
      chart: {
        type: 'line',
        zoomType: 'x'
      },

      showInLegend: true,
      xAxis: {
        categories: [],
        crosshair: true
      },
      yAxis: {
        title: {
          text: 'Number of users'
        }
      },
      credits: {
        enabled: false
      },
      series: []
    };
    return new Promise((resolve, reject) => {
      this.commonService.apiCall(this.apiListService.getDashboardAllUsersData, reqData)
        .then((res: any) => {
          chartOptions.series = res.result.series;
          chartOptions.xAxis.categories = res.result.categories;
          this.returnData = chartOptions;
          resolve(this.returnData);
        })
        .catch(err => { });
    });
  }
}
