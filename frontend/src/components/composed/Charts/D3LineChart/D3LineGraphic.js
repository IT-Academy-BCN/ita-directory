import React, {useEffect, useState, useRef} from "react";
import * as d3 from "d3";
import {MySvg} from "./D3Styled";

export default function D3LineGraphic({data, active, size, month, year}) {
    const meses = [0, 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dec']
    const [dataToPrint, setDataToPrint] = useState([])
    const svgRef = useRef();

    const [anchura, setAnchura] = useState()
    const [altura, setAltura] = useState()

    useEffect(() => {
        let z = svgRef.current.parentNode.clientWidth;
        let s = 100;
        let m = 350
        setDataToPrint(handleData(month, year))
        setAnchura(z - 150)
        setAltura(z > 400 ? z - m : z)
        window.addEventListener("resize", () => reloadChart());
        return () => {
            window.removeEventListener("resize", () => reloadChart());
        };

    }, [])

    const clearChart = () => {
        d3.selectAll("#container > *").remove();
    };

    const reloadChart = () => {
        clearChart()
        setTimeout(() => {
            setDataToPrint(handleData(month, year))
            printChart()
        }, 500);

    }

    function handleData(month, year) {
        if (data) {
            const dataAño = data.filter(dateYearFilter)
            function dateYearFilter(date) {
                const d = date.day.getFullYear()
                return date.day.getFullYear() === parseInt(year)
            }

            const mesesVentas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            dataAño.filter(dateMonthFilter) //ARRAY CON VENTAS POR MESES del año seleccionado
            let p;
            function dateMonthFilter(date) {
                const d = date.day.getMonth()
                mesesVentas[d] = mesesVentas[d] + date.total
                p = mesesVentas
            }
            /// data por dias segun mes y año seleccionado 
            let dataMes = dataAño.filter(daysInMonth)
            function daysInMonth(date) {
                const d = date.day.getMonth()
                return date.day.getMonth() === parseInt(month)
            }
            dataMes = dataMes.map((day) => {
                return day.total
            })
            let d = dataMes

            let finalData = [];
            if (dataAño) {
                if (month !== 'all') {
                    finalData = d
                } else {
                    finalData = p
                }
            }
            return finalData
        }
    }

    useEffect(() => {
        clearChart()
        setDataToPrint(handleData(month, year))
        printChart()
    }, [month, year, size]);

    useEffect(() => {
        clearChart()
        printChart()
    }, [dataToPrint])

    const printChart = () => {
        let xsDomain = dataToPrint.length;
        let xaTicks = xsDomain;
        let yaTicks = 9;
        let yHeight = 0;

        if (month === 'all') {
            yHeight = 8000

            const svg = d3.select(svgRef.current)
                .attr('width', '100%')
                .attr('height', '100%')
                .style('background', 'white')
                .attr("viewBox", [0, 0, anchura, altura])
                .attr("style", `max-width: 100%; ${anchura}: auto; ${altura}: auto; max-height: 500px`)
                .style('overflow', 'visible')
                .style('padding', '10% ')
                .classed("svg-content-responsive", true)

            // setting up scaleing**********************************************************
            const xScale = d3.scaleLinear()
                .domain([0, xsDomain])    /// intervalos (meses/años) cuantos ticks tenemos
                .range([0, anchura])   /// anchura del excrito X
            const yScale = d3.scaleLinear()
                .domain([0, yHeight])
                .range([altura, 0])
            const generateScaledLine = d3.line()
                .x((d, i) => xScale(i + 1))
                .y(yScale)
                .curve(d3.curveCardinal)
            // setting up axis         **************************************************
            const xAxis = d3.axisBottom(xScale)
                .ticks(xaTicks + 1)  /// 12 anual 31/30/28 mensual
                .tickFormat((i) => {if (meses[i] !== 0) {return meses[i]} })
            const yAxis = d3.axisLeft(yScale)
                .ticks(yaTicks);
            svg.append('g')
                .call(xAxis)
                .attr('transform', `translate(0, ${altura})`)  /// colocacion del eje Y
            svg.append('g')
                .call(yAxis)
                .call(g => g.select(".domain").remove())
                .call(g => g.selectAll(".tick line").clone()
                    .attr("x2", anchura)
                )
                .call(g => g.append("text")
                    .attr("x", -10)
                    .attr("y", 10)
                    .attr("fill", "currentColor")
                );
            // setting up data for svg***************************************************
            svg.selectAll('.line')   /// pintamos la linea
                .data([dataToPrint])
                .join('path')
                .attr('d', d => generateScaledLine(d)) // atributos de join()
                .attr('fill', 'none')
                .attr('stroke', 'steelblue')

        } else {
            yHeight = 300

            const svg = d3.select(svgRef.current)
                .attr('width', '100%')
                .attr('height', '100%')
                .style('background', 'white')
                .attr("viewBox", [0, 0, anchura, altura])
                .attr("style", `max-width: 100%; ${anchura}: auto; ${altura}: intrinsic;`)
                .style('overflow', 'visible')
                .style('padding', '10% ')
                .classed("svg-content-responsive", true)

            // setting up scaleing**********************************************************
            const xScale = d3.scaleLinear()
                .domain([0, xsDomain])    /// intervalos (meses/años) cuantos ticks tenemos
                .range([0, anchura])   /// anchura del excrito X
            const yScale = d3.scaleLinear()
                .domain([0, yHeight])  ///  valores que quiero representar en y (en este caso ventas)
                .range([altura, 0])
            const generateScaledLine = d3.line()
                .x((d, i) => xScale(i + 1))
                .y(yScale)
                .curve(d3.curveCardinal)
            // setting up axis         **************************************************
            const xAxis = d3.axisBottom(xScale)
                .ticks(xaTicks + 1)  /// 12 anual 31/30/28 mensual
                .tickFormat((i) => {if (i != 0 && i % 2 !== 0) {return i} })

            const yAxis = d3.axisLeft(yScale)
                .ticks(yaTicks);
            svg.append('g')
                .call(xAxis)
                .attr('transform', `translate(0, ${altura})`)  /// colocacion del eje Y
            svg.append('g')
                .call(yAxis)
                .call(g => g.select(".domain").remove())
                .call(g => g.selectAll(".tick line").clone()
                    .attr("x2", anchura)
                )
                .call(g => g.append("text")
                    .attr("x", -10)
                    .attr("y", 10)
                    .attr("fill", "currentColor")
                );
            // setting up data for svg***************************************************
            svg.selectAll('.line')   /// pintamos la linea
                .data([dataToPrint])
                .join('path')
                .attr('d', d => generateScaledLine(d)) // atributos de join()
                .attr('fill', 'none')
                .attr('stroke', 'steelblue')
        }
    }

    return (
        <>
            <MySvg ref={svgRef} id="container" />
        </>
    );
}
