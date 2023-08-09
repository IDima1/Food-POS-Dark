<template>
    <figure class="highcharts-figure">
        <div id="chartContainer" class="chart-container"></div>
    </figure>
</template>

<script>
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

export default {
    mounted() {
        this.createChart();
    },
    methods: {
        createChart() {
            Highcharts.chart('chartContainer', {

            chart: {
                type: 'column',
                inverted: true,
                polar: true,
                backgroundColor: "transparent",
                width: 188, 
                height: 188,
                border: 0,
                margin: 0,
            },
            title: {
                text: null,
            },
            tooltip: {
                enabled: false,
            },
            pane: {
                size: '100%',
                innerSize: '60%',
                endAngle: 270,
            },
            credits: {
                enabled: false,
            },
            legend: {
                enabled: false, 
            },
            xAxis: {
                lineWidth: 0,
                gridLineWidth: 0,
                labels: {
                    enabled: false, 
                },
            },
            yAxis: {
                lineWidth: 0,
                gridLineWidth: 0,
                labels: {
                    enabled: false, 
                },
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    borderWidth: 0,
                    pointPadding: 0,
                    groupPadding: 0,
                    borderRadius: '50%',
                    dataLabels: {
                        enabled: false,
                    },
                }
            },
            series: [
                {
                    data: [
                        { y: 200, color: '#65B0F6' },
                        { y: 122, color: '#FFB572' },
                        { y: 254, color: '#FF7CA3' },
                    ],
                    name: null,
                    pointWidth: 12,
                },
                
            ],
            });
        },
    }  
};
</script>

<style lang="sass" scoped>
.chart-container 
    overflow: visible !important
    width: auto 
    height: auto
    display: flex
    flex-direction: row
    align-items: center

</style>
