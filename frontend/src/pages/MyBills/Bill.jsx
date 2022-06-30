import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import ReactTable from '../../components/organisms/Table/ReactTable'
import { colors } from '../../theme'
import modelBill from './modelBillData.json'
import {
  BillComponentStyled,
  BillStyled,
  Error,
  HeaderStyled,
  FooterStyled,
  SignatureStyled,
  PaymentMethodStyled,
  PaySignStyled,
  InvoiceRecipientStyled,
  InvoiceSenderStyled,
  TermsAndCalcStyled,
  CalcTableStyled,
  TableWrapperStyled,
  AddressesWrapper,
  TermsStyled,
} from './Bill.styles'
// import DownloadPDF from "./DocumentComponent";

function Bill(colorLogo) {
  const { id } = useParams() // The dynamic id
  const [billData] = useState(modelBill)

  const indexOfId = billData.findIndex((i) => id === String(i.id))
  // console.log(`indexOfId${indexOfId}`)
  const [chosenBill] = useState(modelBill[indexOfId].tradeData.items)
  // const [chosenBill, setChosenBill] = useState(modelBill[indexOfId]["tradeData"]["items"]);

  const data = useMemo(() => [...chosenBill], [chosenBill])

  // Selecting the right bill...
  const selectedBill = billData.filter((selected) => {
    const res = selected.id === parseInt(id, 10)
    return res
  })

  const customRowStyle = (row) => {
    if (Number(row.original.itemID) % 2 === 0) {
      return { backgroundColor: 'white' }
    }
    return { backgroundColor: `${colors.lightBeige}` }
  }

  // Columns for datatables
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'itemID',
        // eslint-disable-next-line react/prop-types
        Cell: ({ row }) => <div>{row.original.itemID}</div>,
      },
      {
        Header: 'Item',
        accessor: 'itemTitle',
        // eslint-disable-next-line react/prop-types
        Cell: ({ row }) => <div>{row.original.itemTitle}</div>,
      },
      {
        Header: 'Price',
        accessor: 'itemPrice',
        // eslint-disable-next-line react/prop-types
        Cell: ({ row }) => (
          <div>
            <span>€ </span>
            {/* eslint-disable-next-line react/prop-types */}
            {row.original.itemPrice}
          </div>
        ),
      },
      {
        Header: 'Quantity',
        accessor: 'itemQuant',
        // eslint-disable-next-line react/prop-types
        Cell: ({ row }) => <div className={customRowStyle}>{row.original.itemQuant}</div>,
      },
      {
        Header: <div className="lastColumn">Amount</div>,
        accessor: 'amount',
        // eslint-disable-next-line react/prop-types
        Cell: ({ row }) => (
          <div className={`${customRowStyle} lastColumn1`}>
            <span>€ </span>
            {/* eslint-disable-next-line react/prop-types */}
            {row.original.itemPrice * row.original.itemQuant}
          </div>
        ),
      },
    ],
    []
  )

  const generatedBill = selectedBill.map((bill) => {
    return (
      <BillStyled key={bill.id} color={colors.lightGray}>
        <HeaderStyled>
          <h2 className="logo-company">Logo Company {bill.header.logoCompany}</h2>
          <h2 className="invoice">INVOICE {bill.header.invoiceID}</h2>
        </HeaderStyled>
        <AddressesWrapper>
          <InvoiceRecipientStyled>
            <div className="invoice-recipient">
              <p>Invoice to:</p>
              <h2>{bill.emisorReceiver.emisor.emName}</h2>
              <p>{bill.emisorReceiver.emisor.emPosition}</p>
            </div>
            <br />
            <div className="address-recipient">
              <p>Address:</p>
              <p>{bill.emisorReceiver.emisor.emStreet}</p>
              <p>{bill.emisorReceiver.emisor.emContact}</p>
            </div>
          </InvoiceRecipientStyled>
          <InvoiceSenderStyled>
            <div className="invoice-recipient">
              <p>Invoice from:</p>
              <h2>{bill.emisorReceiver.receiver.reName}</h2>
              <p>{bill.emisorReceiver.receiver.rePosition}</p>
            </div>
            <br />
            <div className="address-recipient">
              <p>Address:</p>
              <p>{bill.emisorReceiver.emisor.emStreet}</p>
              <p>{bill.emisorReceiver.emisor.emContact}</p>
            </div>
          </InvoiceSenderStyled>
        </AddressesWrapper>

        <TableWrapperStyled>
          <ReactTable columns={columns} data={data} customRowStyle={customRowStyle} />
        </TableWrapperStyled>

        <TermsAndCalcStyled>
          <TermsStyled>
            <h3>Terms & Conditions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore
            </p>
          </TermsStyled>
          <CalcTableStyled>
            <tbody>
              <tr>
                <th>Sub Total</th>

                <td>
                  €{' '}
                  {selectedBill.map((amount) => {
                    const itemsArr = amount.tradeData.items
                    const itemsAmount = itemsArr.map((it) => {
                      return it.itemPrice * it.itemQuant
                    })
                    const sum = itemsAmount.reduce((partialSum, a) => partialSum + a, 0)
                    return sum
                  })}
                </td>
              </tr>
              <tr>
                <th>Tax(5%)</th>

                <td>
                  €{' '}
                  {selectedBill.map((amount) => {
                    const itemsArr = amount.tradeData.items
                    const itemsAmount = itemsArr.map((it) => {
                      return it.itemPrice * it.itemQuant
                    })
                    const sum = itemsAmount.reduce((partialSum, a) => partialSum + a, 0)
                    const tax = amount.calculation.calcs
                    const taxItem = tax.map((t) => t.tax)
                    const taxCalc = (taxItem / 100) * sum
                    return taxCalc.toFixed()
                  })}
                </td>
              </tr>
              <tr>
                <th>Discount(10%)</th>

                <td>
                  €{' '}
                  {selectedBill.map((amount) => {
                    const itemsArr = amount.tradeData.items
                    const itemsAmount = itemsArr.map((it) => {
                      return it.itemPrice * it.itemQuant
                    })
                    const sum = itemsAmount.reduce((partialSum, a) => partialSum + a, 0)
                    const tax = amount.calculation.calcs
                    const taxItem = tax.map((t) => t.tax)
                    const taxCalc = sum + (taxItem / 100) * sum
                    const disc = tax.map((t) => t.discount)
                    const discCalc = (disc / 100) * taxCalc
                    return discCalc.toFixed()
                  })}
                </td>
              </tr>
              <tr>
                <th className="grand-total">GRAND TOTAL</th>
                <td className="items-center grand-total">
                  <div className="font-bold">
                    €{' '}
                    {selectedBill.map((amount) => {
                      const itemsArr = amount.tradeData.items
                      const itemsAmount = itemsArr.map((it) => {
                        return it.itemPrice * it.itemQuant
                      })
                      const sum = itemsAmount.reduce((partialSum, a) => partialSum + a, 0)
                      const tax = amount.calculation.calcs
                      const taxItem = tax.map((t) => t.tax)
                      const taxCalc = (taxItem / 100) * sum
                      const disc = tax.map((t) => t.discount)
                      const discCalc = (disc / 100) * taxCalc
                      const grandTotal = sum + taxCalc + discCalc
                      return grandTotal.toFixed()
                    })}
                  </div>
                </td>
              </tr>
            </tbody>
          </CalcTableStyled>
        </TermsAndCalcStyled>
        <PaySignStyled>
          <PaymentMethodStyled>
            <h3>Payment Method</h3>
            <div>
              <h5>Bank</h5>
              <small>Account ID: {bill.payment.bank.accountID}</small>
              <small>Account Name: {bill.payment.bank.accountName}</small>
            </div>
            <div>
              <h5>Paypal</h5>
              <small>Paypal ID: {bill.payment.paypal.accountName}</small>
              <small>Account Name: {bill.payment.paypal.account}</small>
            </div>
          </PaymentMethodStyled>
          <SignatureStyled>
            <div className="signature-image">{bill.signature.image}</div>

            <p>{bill.emisorReceiver.receiver.reName}</p>
            <h4>{bill.emisorReceiver.receiver.rePosition}</h4>
          </SignatureStyled>
        </PaySignStyled>
        <FooterStyled>
          <h4>Thank You For Doing Business With Us.</h4>
          <p>We aim to provide simple solutions for your business problems.</p>
        </FooterStyled>
      </BillStyled>
    )
  })

  let error
  let downloadBtn

  if (indexOfId !== -1) {
    error = generatedBill
    // downloadBtn = <DownloadPDF data={selectedBill} type={"button"} />;
  } else {
    error = <Error>There are no bills available</Error>
  }

  return (
    <BillComponentStyled>
      <h2 className="logo " colorLogo={colorLogo}>
        LOGO EMPRESA
      </h2>
      {downloadBtn}
      {error}
    </BillComponentStyled>
  )
}

export default Bill
