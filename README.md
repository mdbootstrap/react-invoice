![MDB Logo](https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-react.png)

# MDB React 5

Responsive React Invoice with Bootstrap 5. Various examples like simple invoice, payment receipt, company invoice, invoice with images and many more.

Check out [React Invoice Documentation](https://mdbootstrap.com/docs/react/extended/invoice) for detailed instructions & even more examples.

## Basic example
![React Invoice Basic Example](https://user-images.githubusercontent.com/108793661/185054287-df193761-8ae5-4ae3-9278-265d900270bb.png)
```js
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer className="py-5">
      <MDBCard>
        <MDBCardBody className="mx-4">
          <MDBContainer>
            <p className="my-5 text-center" style={{ fontSize: "30px" }}>
              Thank for your purchase
            </p>
            <MDBRow>
              <MDBTypography listUnStyled>
                <li className="text-black">John Doe</li>
                <li className="text-muted mt-1">
                  <span className="text-black">Invoice</span> #12345
                </li>
                <li className="text-black mt-1">April 17 2021</li>
              </MDBTypography>
              <hr />
              <MDBCol xl="10">
                <p>Pro Package</p>
              </MDBCol>
              <MDBCol xl="2">
                <p className="float-end">$199.00</p>
              </MDBCol>
              <hr />
            </MDBRow>
            <MDBRow>
              <MDBCol xl="10">
                <p>Consulting</p>
              </MDBCol>
              <MDBCol xl="2">
                <p className="float-end">$100.00</p>
              </MDBCol>
              <hr />
            </MDBRow>
            <MDBRow>
              <MDBCol xl="10">
                <p>Support</p>
              </MDBCol>
              <MDBCol xl="2">
                <p className="float-end">$10.00</p>
              </MDBCol>
              <hr style={{ border: "2px solid black" }} />
            </MDBRow>
            <MDBRow className="text-black">
              <MDBCol xl="12">
                <p className="float-end fw-bold">Total: $10.00</p>
              </MDBCol>
              <hr style={{ border: "2px solid black" }} />
            </MDBRow>
            <div className="text-center" style={{ marginTop: "90px" }}>
              <a>
                <u className="text-info">View in browser</u>
              </a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </MDBContainer>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
```

## How to use?

1. Download MDB 5 - FREE REACT UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)

## More examples (click on the image to see a live demo)
### Company invoice:
[![React Invoice #1](https://user-images.githubusercontent.com/108793661/185054568-9be5414c-25c2-4768-9099-492e4fbadb0d.png)](https://mdbootstrap.com/docs/react/extended/invoice#company-invoice)

### Company Invoice with logo:
[![React Invoice #2](https://user-images.githubusercontent.com/108793661/185054749-0dff827e-8d6b-4a6b-ac92-ddbac6a77a85.png)](https://mdbootstrap.com/docs/react/extended/invoice#company-invoice)


You can find other examples [here](https://mdbootstrap.com/docs/react/extended/invoice).

<hr>

## More extended React documentation
<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/code/">React Bootstrap Code</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gallery/">React Bootstrap Gallery</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/hamburger-menu/">React Bootstrap Hamburger Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/jumbotron/">React Bootstrap Jumbotron</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/maps/">React Bootstrap Maps</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/mega-menu//">React Bootstrap Mega Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/media-object/">React Bootstrap Media object</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/multiselect/">React Bootstrap Multiselect</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/masonry/">React Bootstrap Masonry</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/contact/">React Bootstrap Contact form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gradients/">React Bootstrap Gradients</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/pagination/">React Bootstrap Pagination</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/panels/">React Bootstrap Panels</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/social-media/">React Bootstrap Social Media icons & buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/search/">React Bootstrap Search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-sort/">React Bootstrap Table sort</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-responsive/">React Bootstrap Table responsive</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-scroll/">React Bootstrap Table scroll</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-search/">React Bootstrap Table search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/textarea/">React Bootstrap Textarea</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/sidebar/">React Bootstrap Sidebar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/profiles/">React Bootstrap Profiles</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/dropdown-multilevel/">React Bootstrap Nested Dropdown</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/">React Bootstrap Address Form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/back-to-top">React Scroll Back to Top button</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/product-cards">React Product Cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/avatar">React Avatar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/carousel-with-thumbnails">React Carousel Slider with Thumbnails</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/chat">React Chat</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comparison-table">React Comparison table</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comments">React Comments</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/drawer">React Drawer</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/faq">React FAQ component / section</a></li>
</ul>
