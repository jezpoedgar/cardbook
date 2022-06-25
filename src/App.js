import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div id="container">
    <div className="product-details">
      <h1>CHRISTMAS TREE</h1>
      <span className="hint-star star">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
      </span>
      <p className="information">
        " Let's spread the joy , here is Christmas , the most awaited day of the
        year.Christmas Tree is what one need the most. Here is the correct tree
        which will enhance your Christmas.
      </p>
      <div className="control">
        <button className="btn">
          <span className="price">$250</span>
          <span className="shopping-cart">
            <i className="fa fa-shopping-cart" aria-hidden="true" />
          </span>
          <span className="buy">Get now</span>
        </button>
      </div>
    </div>
    <div className="product-image">
      <img
        src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="info">
        <h2> Description</h2>
        <ul>
          <li>
            <strong>Height : </strong>5 Ft{" "}
          </li>
          <li>
            <strong>Shade : </strong>Olive green
          </li>
          <li>
            <strong>Decoration: </strong>balls and bells
          </li>
          <li>
            <strong>Material: </strong>Eco-Friendly
          </li>
        </ul>
      </div>
    </div>
  </div>
</>

  );
}

export default App;
