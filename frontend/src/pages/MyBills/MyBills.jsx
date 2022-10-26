/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTable } from 'react-table'
import HelmetComponent from '../../components/organisms/HelmetComponent'
import Body from '../../components/layout/Body/Body'
import { colors } from '../../theme'
import bills from './billsData.json'
import { MyTableStyle, RowTableStyle, HeaderTableStyle } from './MyBills.styles'
import { Icon } from '../../components/atoms'
// import DownloadPDF from "./DocumentComponent";
// import modelBill from './modelBillData.json'

// -----------------------------------
// -----------------------------------

function MyBills() {
  // Get the fake JSON data
  const [billsData] = useState(bills)
  // console.log(billsData)
  const data = useMemo(() => [...billsData], [billsData])

  // const billExist = () => {
  // 	if(!billsData[0].id && billsData[1].id)
  // }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => [
    {
      Header: (
        <HeaderTableStyle color={colors.frenchBlue} style={{ justifyContent: 'left' }}>
          N.Ref.
        </HeaderTableStyle>
      ),
      accessor: 'id',
      Cell: ({ row }) => (
        <RowTableStyle color={colors.lightGrey} style={{ textAlign: 'left' }}>
          {row.values.id}
        </RowTableStyle>
      ),
      left: true,
    },
    {
      Header: (
        <HeaderTableStyle color={colors.frenchBlue} style={{ justifyContent: 'left' }}>
          Fecha
        </HeaderTableStyle>
      ),
      accessor: 'fecha',
      Cell: ({ row }) => (
        <RowTableStyle color={colors.grey} style={{ textAlign: 'left' }}>
          {row.values.fecha}
        </RowTableStyle>
      ),
    },
    {
      Header: (
        <HeaderTableStyle color={colors.frenchBlue} padding="0">
          Subtotal
        </HeaderTableStyle>
      ),
      accessor: 'costeSinIVA',
      Cell: ({ row }) => (
        <RowTableStyle color={colors.grey}>
          {row.values.costeSinIVA}
          <span>€</span>
        </RowTableStyle>
      ),
    },
    {
      Header: (
        <HeaderTableStyle color={colors.frenchBlue} padding="0">
          IVA
        </HeaderTableStyle>
      ),
      accessor: 'IVA',
      Cell: ({ row }) => (
        <RowTableStyle color={colors.grey}>
          {' '}
          {row.values.IVA} <span>%</span>
        </RowTableStyle>
      ),
    },
    {
      Header: (
        <HeaderTableStyle color={colors.frenchBlue} padding="0">
          Desc.
        </HeaderTableStyle>
      ),
      accessor: 'descuento',
      Cell: ({ row }) => (
        <RowTableStyle color={colors.grey}>
          {' '}
          {row.values.descuento} {row.values.descuento ? <span>%</span> : <span>-</span>}
        </RowTableStyle>
      ),
    },
    {
      Header: <HeaderTableStyle color={colors.frenchBlue}>Total</HeaderTableStyle>,
      accessor: 'total',
      Cell: ({ row }) => (
        <RowTableStyle color={colors.grey}>
          {row.values.descuento
            ? row.values.costeSinIVA -
              (row.values.costeSinIVA * row.values.descuento) / 100 +
              (row.values.costeSinIVA * row.values.IVA) / 100
            : row.values.costeSinIVA + (row.values.costeSinIVA * row.values.IVA) / 100}
          <span>€</span>
        </RowTableStyle>
      ),
    },
    {
      Header: (
        <HeaderTableStyle color={colors.frenchBlue} style={{ textAlign: 'right' }}>
          Acciones
        </HeaderTableStyle>
      ),
      accessor: 'acciones',
      Cell: ({ row }) => (
        <RowTableStyle style={{ textAlign: 'center' }}>
          <Link to={`/my-bills/${row.values.id}`} title="Ver factura">
            <Icon className="vivibility" color={colors.grey} />
          </Link>

          {/* {modelBill.map(
						(invoice) =>
							invoice.id === row.values.id && (
								<DownloadPDF key={invoice.id} data={[invoice]} type={"icon"} />
							)
					)} */}
        </RowTableStyle>
      ),
    },
  ])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })
  // #e6f2f2

  return (
    <Body
      title="Mis facturas"
      logoColor={colors.darkRed}
      headerColor={colors.lightblue} // TODO: This should be lightBlue but have no sense
      fontColor={colors.grey}
      justifyTitle="flex-start"
      isLoggedIn="true"
    >
      <HelmetComponent text="Mis Facturas" />
      <MyTableStyle className="MyTableStyle">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} style={{ borderTop: `solid 1px ${colors.grey}` }}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </MyTableStyle>
    </Body>
  )
}

export default MyBills
