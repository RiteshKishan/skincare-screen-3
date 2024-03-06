import React from "react";
import "./InvoiceList.css";
import invoice_border from '../Assests/invoice-border.svg'
import invoice_normal from '../Assests/invoice-normal.svg'

const InvoiceList = () => {
    const invoiceData = [{
        image:invoice_border
    },{
        image:invoice_normal
    },{
        image:invoice_normal
    },{
        image:invoice_normal
    },{
        image:invoice_normal
    },{
        image:invoice_normal
    },{
        image:invoice_normal
    },{
        image:invoice_normal
    },]
  return (
    <div className="invoicelist">
      <div className="invoice-header">
        <div className="header-templates">Templates</div>
        <div className="header-createinvoice">Create Invoice</div>
      </div>
      <div className="line"></div>
      <div className="invoice-container">
        {invoiceData.map((data) => {
            return (
                <div className="each-invoice"><img src={data.image} alt="" /></div>
            )
        })}
      </div>
    </div>
  );
};

export default InvoiceList;
