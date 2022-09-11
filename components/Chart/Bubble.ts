import { defineComponent, h, PropType } from 'vue'

import { Bubble } from 'vue-chartjs'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LinearScale,
    Plugin
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale)

export default defineComponent({
    name: 'BubbleChart',
    components: {
        Bubble
    },
    props: {
        chartData: {
            type: Array,
            required: true
        },
        chartId: {
            type: String,
            default: 'bubble-chart'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object as PropType<Partial<CSSStyleDeclaration>>,
            default: () => { }
        },
        plugins: {
            type: Array as PropType<Plugin<'bubble'>[]>,
            default: () => []
        }
    },
    setup(props) {
        const chartData = {
            datasets: []
        }

        props.chartData.forEach(item => {
            chartData.datasets.push({
                label: item.label,
                backgroundColor: item.backgroundColor,
                data: item.data
            })
        })

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false
        }

        return () =>
            h(Bubble, {
                chartData,
                chartOptions,
                chartId: props.chartId,
                width: props.width,
                height: props.height,
                cssClasses: props.cssClasses,
                styles: props.styles,
                plugins: props.plugins
            })
    }
})
