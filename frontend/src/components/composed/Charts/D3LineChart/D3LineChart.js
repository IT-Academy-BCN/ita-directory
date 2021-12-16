import React, {useEffect, useState, useRef} from "react";
import * as d3 from "d3";


export default function D3LineChart({data, active, size, month, year}) {


    // importart Data ** hecho (props)

    // seleccionar que data vamos a mostrar - mensual/anual
    const [selectedMonth, setSelectedMonth] = useState()
    const [selectedYear, setSelectedYear] = useState()

    useEffect(() => {
        setSelectedMonth(month);
        setSelectedYear(year)
    }, [selectedMonth]);

    const [xScaleDomain, setXScaleDomain] = useState(11)
    const [xAxisTicks, setXAxisTicks] = useState(12)
    const [yAxisTicks, setYAxisTicks] = useState(8)

    useEffect(() => {

        /// AÑADIR RELOAD PARA EL SVG, HAY QUE VOLVER A RENDERIZAR GRAFICA A CADA CAMBIO DE DATOS


        switch (month) {
            case 'all':  // anual
                setXScaleDomain(11)
                setXAxisTicks(12)
                setYAxisTicks(8)
                break;
            case 1: //febrero  27 dias
                setXScaleDomain(27)
                setXAxisTicks(27)
                setYAxisTicks(7)
                break;
            case (month % 2 === 0):  // meses impares 31 dias
                setXScaleDomain(30)
                setXAxisTicks(30)
                setYAxisTicks(7)
                break;
            case (month !== 1 && month % 2 !== 0):  // meses pares 30 dias
                setXScaleDomain(31)
                setXAxisTicks(31)
                setYAxisTicks(7)
        }

    }, [year, month])

    /// ÇFINN    seleccionar que data vamos a mostrar - mensual/anual


    // setting up svg  *** mismo svg para ambos
    // setting up scaleing *** misma escala para ambos
    // setting up axis   *** dos axis diferentes segun data a mostrar
    // setting up data for svg  *** mismo codigo para ambos

    const [data2] = useState([2500, 5000, 4000, 1500, 3500, 7400, 1000, 7500, 3216, 7213, 1555, 4666]);
    const svgRef = useRef();
    /////   ANUAL ************************************************

    // setting up svg
    const [anchura, setAnchura] = useState()
    const [altura, setAltura] = useState()
    useEffect(() => {
        setAnchura(window.innerWidth - 500); /// arreglar anchura del grafico
        setAltura(svgRef.current.clientHeight)
        console.log(anchura, altura)
    }, [svgRef])

    const w = 800;
    const h = 8000; // 300 menusal
    const svg = d3.select(svgRef.current)
        .attr('width', '100%')
        .attr('height', '100%')
        .style('background', 'goldenrod')
        .style('overflow', 'visible')
        .style('padding', '5% 10%')

    // setting up scaleing
    const xScale = d3.scaleLinear()
        .domain([0, xScaleDomain])    /// intervalos (meses/años) cuantos ticks tenemos
        .range([0, anchura])   /// anchura del excrito X
    const yScale = d3.scaleLinear()
        .domain([0, h])  ///  valores que quiero representar en y (en este caso ventas)
        .range([altura, 0])
    const generateScaledLine = d3.line()
        .x((d, i) => xScale(i))
        .y(yScale)
        .curve(d3.curveCardinal)

    // setting up axis
    const xAxis = d3.axisBottom(xScale)
        .ticks(xAxisTicks)  /// 12 anual 31/30/28 mensual
        .tickFormat(i => i + 1)
    const yAxis = d3.axisLeft(yScale)
        .ticks(yAxisTicks);
    svg.append('g')
        .call(xAxis)
        .attr('transform', `translate(0, ${altura})`)  /// colocacion del eje Y
    svg.append('g')
        .call(yAxis)

    // setting up data for svg
    svg.selectAll('.line')   /// pintamos la linea
        .data([data2])
        .join('path')
        .attr('d', d => generateScaledLine(d)) // atributos de join()
        .attr('fill', 'none')
        .attr('stroke', 'black')

    ///////////////   FIN ANUAL *****************************************

    const consolelog = () => {
        console.log(month, year)

    }

    return (
        <div>
            <button onClick={() => consolelog()} >ConsoleLog</button>
            <svg ref={svgRef} />
        </div>
    );
}
