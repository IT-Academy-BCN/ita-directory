import styled from 'styled-components'
// import tw from "twin.macro";
import { device, colors } from '../../theme'

export const Error = styled.div`
  border: 1px solid;
  margin: auto;
  padding: 15px 10px 15px 15px;
  background-position: 10px center;
  max-width: 460px;
`

export const BillComponentStyled = styled.div.attrs({
  className:
    'bg-lightGrey2 flex flex-col flex-nowrap justify-center content-center items-center pb-12 -mb-12',
})`
  .logo {
    color: ${(props) => (props.color_logo ? props.color_logo : colors.darkRed)};
    font: normal normal normal 15px/15px Korb-Bold;
  }

  .blue-gradient {
    width: 7.6rem;
    margin-bottom: 1.5rem;
  }
`

export const BillStyled = styled.div.attrs({
  // className: "flex flex-col w-full p-0 md:w-9/12 md:pt-6 md:pr-8 md:pb-0 md:pl-8 bg-lightGrey1",
})`
  transform: scale(0.8);
  font-family: 'Inter', sans-serif;
  @media ${device.Tablet} {
    transform: scale(1);
  }

  .bold,
  h3,
  h4,
  h5 {
    font-weight: bold;
  }

  h5 {
    font-size: small;
  }
`

export const HeaderStyled = styled.header.attrs({
  // className: "bg-white flex flex-row justify-between items-end py-0 px-8 -mt-40 md:h-auto md:mt-0 md:p-0",
})`
  padding-top: 3rem;

  @media ${device.Tablet} {
    padding: 0 2rem;
  }
  @media ${device.Desktop} {
    padding: 0 4rem;
  }
`

export const AddressesWrapper = styled.div.attrs({
  // className: "justify-between bg-white md:flex md:flex-row md:mt-0",
})``

export const InvoiceRecipientStyled = styled.section.attrs({
  // className: "flex flex-col items-end width-full pt-8 pb-0 px-8",
})`
  div {
  }
  h2 {
    font-weight: bold;
  }
  p {
    font-size: small;
  }
`

export const InvoiceSenderStyled = styled(InvoiceRecipientStyled)`
  @media ${device.Tablet} {
    h2 {
      margin: 0;
    }
    justify-content: flex-end;

    @media ${device.Desktop} {
    }
  }
`

export const TableWrapperStyled = styled.div.attrs({
  // className: "mt-12 w-full border-t-2 border-lightGrey",
})`
  table {
    block-size: fit-content;
    th,
    tr {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      min-height: 47px;

      td {
        justify-self: center;
      }
    }

    th {
      &:last-child {
        display: flex;
        justify-content: center !important; // TODO Center or Flex-End?
        justify-content: flex-end;
        padding-right: 2rem;

        @media ${device.Tablet} {
          padding-right: 0rem;
        }
        @media ${device.Desktop} {
          padding-right: 4rem;
        }
      }
    }
  }
`

export const CalcTableStyled = styled.table`
  border-collapse: collapse;

  td,
  th {
    justify-content: start;
    min-height: 2rem;

    &:first-child {
      min-width: 8rem;
    }

    @media ${device.Tablet} {
      min-width: fit-content;
    }
  }

  tr {
    display: grid;
    grid-template-columns: 1fr 1fr;

    td {
      /* min-width: 80px; */
      padding-left: 0.5rem;
      text-align: start;
      justify-content: start;

      &:last-child {
        @media ${device.Tablet} {
          padding-right: 2rem;
          display: flex;
          justify-content: flex-end;
        }
        @media ${device.Desktop} {
          padding-right: 4rem;
        }
      }
    }
  }
`
export const TermsAndCalcStyled = styled.div.attrs({
  // className: "flex items-start flex-col-reverse",
})`
  @media ${device.Tablet} {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`

export const TermsStyled = styled.section.attrs({
  // className: "mt-10 py-0 px-8 max-w-sm h-24",
})`
  @media ${device.Tablet} {
    margin-top: 4rem;
    padding: 0rem;
    max-width: 350px;
  }
  @media ${device.Tablet} {
    padding: 0 2rem;
  }
  @media ${device.Desktop} {
    padding-left: 4rem;
  }
`

export const PaySignStyled = styled.section.attrs({
  // className: "flex flex-col items-start p-0 mx-0 mt-10 mb-16 xsm:flex-row xsm:justify-between xsm:items-end ",
})`
  div {
    h4 {
      margin: 0.5rem 0;
    }
    small {
      line-height: 1.5;
    }
  }
`

export const PaymentMethodStyled = styled.div.attrs({
  // className: "flex flex-col justify-end pl-8",
})`
  h3 {
    white-space: nowrap;
  }

  div {
  }
  @media ${device.Mobile} {
    padding-left: 2rem;
  }

  @media ${device.Tablet} {
    padding-left: 0;
  }

  @media ${device.Tablet} {
    padding-left: 2rem;
  }
  @media ${device.Desktop} {
    padding-left: 4rem;
  }
`

export const SignatureStyled = styled.div.attrs({
  // className: "flex flex-col w-full pb-8 pl-8 xsm:justify-end xsm:text-center xsm:w-4/12",
})`
  margin-top: 1.8rem;
  width: fit-content;
  @media ${device.Tablet} {
    padding-right: 2rem;
  }
  @media ${device.Desktop} {
    padding-right: 4rem;
  }
  p {
    white-space: nowrap;
  }

  h4 {
    font-weight: lighter !important;
  }

  .signature-image {
  }
`

export const FooterStyled = styled.footer.attrs({
  // className: "flex flex-col justify-center text-center -mt-12 mb-5 px-8 pb-8",
})`
  h4 {
  }

  p {
  }
`

export const RowStyled = styled.div`
  min-height: '47px';
  align-items: center;
`
