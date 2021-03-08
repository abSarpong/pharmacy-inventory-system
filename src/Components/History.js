import React from "react";
import { HiOutlineCurrencyDollar, HiOutlineCalendar } from "react-icons/hi";

const History = ({ product }) => {
  let priceHistoryList = product.price.map((price) => {
    let date,
      dateObject,
      day,
      month,
      year = "";

    date = price.date;
    dateObject = new Date(date);
    day = dateObject.getDate();
    month = dateObject.getMonth();
    year = dateObject.getFullYear();

    switch (month) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sep";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
      default:
        break;
    }
    return (
      <div key={price.id} className="price-history-section">
        <div className="list">
          <div className="product-card-body">
            &#8213;&nbsp;&nbsp;
            <HiOutlineCurrencyDollar className="icon" />
            &nbsp;&nbsp;
            <p className="body-text">Ghs {price.price}</p>
          </div>
          &nbsp;&nbsp;&#xb7;&nbsp;&nbsp;
          <div className="product-card-body">
            <HiOutlineCalendar className="icon" />
            &nbsp;&nbsp;
            <p className="body-text">
              {month} {day}, {year}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h4>Price history</h4>
      {priceHistoryList}
    </div>
  );
};

export default History;
