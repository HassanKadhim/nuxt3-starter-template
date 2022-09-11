<template>
    <main>
        <div m="y-2" flex="lg:~ row gap-2" justify="content lg:center">
            <h1>Welcome Nuxt 3 Starter</h1>
        </div>


        <div>
            <h1>Chart collection</h1>
        </div>
        <div m="y-8" justify="content lg:center" flex="lg:~ row gap-2">
            <ChartLine :chartLabels="chartLabels" :chartData="chartData" />
            <ChartBar :chartLabels="chartLabels" :chartData="chartData" />
            <ChartBubble :chartData="bubbleChartData" />
        </div>
        <div>
            <h1><a href="https://louismazel.github.io/maz-ui-3/" target="_blank">Ui Components</a></h1>
        </div>
        <a href="https://louismazel.github.io/maz-ui-3/components/maz-btn.html">#Buttons</a>
        <div h m="y-8" flex="lg:~ row gap-2" justify="content lg:around">
            <MazBtn @click="flash.dialog('title' , 'body ' , 'info')">primary</MazBtn>
            <MazBtn @click="flash.toast('primary')" color="secondary" outline>secondary</MazBtn>
            <MazBtn @click="flash.toast('primary' , 'info')" color="info" pastel>info</MazBtn>
            <MazBtn @click="flash.toast('error' , 'error')"  rounded color="danger">rounded</MazBtn>
        </div>
        <a href="https://louismazel.github.io/maz-ui-3/components/maz-btn.html">#Inputs</a>
        <div h m="y-8" flex="lg:~ col gap-2" justify="content lg:around">
            <MazInput v-model="inputValue" label="Label" />
            <MazInput v-model="inputValue" label="Label" type="password" />
            <MazInputNumber v-model="numberValue" label="Enter number" :min="5" :max="10000" :step="1" size="md" color="secondary" />
        </div>

    </main>
</template>

<script lang="ts" setup>
const flash = useFlash()
const inputValue = ref('Hello')
const numberValue = ref(2)

const chartLabels = ['a', 'b', 'c', 'd', 'e']

const dataOne = {
    label: "Data One",
    backgroundColor: "#ccb3ff",
    data: [10, 20, 30, 40, 50]
}

const dataTwo = {
    label: "Data Two",
    backgroundColor: "#ffb3cc",
    data: [20, 30, 40, 50, 60]
}

const dataThree = {
    label: "Data Three",
    backgroundColor: "#b3ccff",
    data: [30, 40, 50, 60, 70]
}
const dataFour = {
    label: "Data Four",
    backgroundColor: "#b3ccff",
    data: [40, 50, 60, 70, 80]
}
const chartData = [dataOne, dataTwo, dataThree, dataFour]


const bubbleDataOne = {
    label: 'Data One',
    backgroundColor: '#f87979',
    data: [
        {
            x: 20,
            y: 25,
            r: 5
        },
        {
            x: 40,
            y: 10,
            r: 10
        },
        {
            x: 30,
            y: 22,
            r: 30
        }
    ]
}

const bubbleDataTwo = {
    label: 'Data Two',
    backgroundColor: '#79f879',
    data: [
        {
            x: 10,
            y: 30,
            r: 10
        },
        {
            x: 20,
            y: 10,
            r: 20
        },
        {
            x: 40,
            y: 25,
            r: 5
        }
    ]
}

const bubbleDataThree = {
    label: 'Data Three',
    backgroundColor: '#79f8f8',
    data: [
        {
            x: 30,
            y: 40,
            r: 20
        },
        {
            x: 10,
            y: 60,
            r: 10
        },
        {
            x: 20,
            y: 30,
            r: 5
        }
    ]
}

const bubbleChartData = [bubbleDataOne, bubbleDataTwo, bubbleDataThree]





</script>

