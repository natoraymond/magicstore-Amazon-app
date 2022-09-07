import React from 'react'
import './Home.css'
import Product from '../../Components/Products/Product'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <div className="home container-fluid">

      <div className="home__container">
        <img
          className="home__image img-responsive"
          src="Amaz.jpeg"
          alt="Amazo"
        />

        <Row>
          <Col md={3}>
            <Product
              id="12321341"
              title="40 Ultra Slim Full HD Smart Tv"
              price={11.96}
              rating={5}
              image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/W/114315_1574843467.jpg"
            />
          </Col>

          <Col md={3}>
            <Product
              id="49538094"
              title="Amazing Smart Tv With Dual Screen - 43 inch "
              price={239.0}
              rating={4}
              image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/T/96406_1630030632.jpg"
            />
          </Col>

          <Col md={3}>
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </Col>

          <Col md={3}>
            <Product
              id="49538094"
              title="Designer TV Stand - Coffee Brown (Lagos Only)"
              price={239.0}
              rating={4}
              image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/145233/1.jpg?9473"
            />
          </Col>
        </Row>


        <Row>
          <Col md={6}>
            <Product
              id="12321341"
              title="40 Ultra Slim Full HD Smart Tv"
              price={11.96}
              rating={5}
              image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/W/114315_1574843467.jpg"
            />
          </Col>

          <Col md={6}>
            <Product
              id="49538094"
              title="Amazing Smart Tv With Dual Screen - 43 inch "
              price={239.0}
              rating={4}
              image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/T/96406_1630030632.jpg"
            />
          </Col>          
        </Row>

        <Row>
          <Col md={4}>
            <Product
              id="12321341"
              title="40 Ultra Slim Full HD Smart Tv"
              price={11.96}
              rating={5}
              image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/W/114315_1574843467.jpg"
            />
          </Col>

          <Col md={4}>
            <Product
              id="49538094"
              title="Amazing Smart Tv With Dual Screen - 43 inch "
              price={239.0}
              rating={4}
              image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/T/96406_1630030632.jpg"
            />
          </Col>

          <Col md={4}>
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </Col>          
        </Row>







        {/* <div className="home__row row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Home Bluetooth Headset Bluetooth 5.0 Ear Hook Earpiece Hands Free Wireless
            "
            price={598.99}
            rating={4}
            image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/073409/1.jpg?5136"
          />
          <Product
            id="4903850"
            title="Partern TV Stand - Orange And Black"
            price={199.99}
            rating={3}
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/815543/1.jpg?0953"
          />
          <Product
            id="49538094"
            title="Washing Machine PNG File"
            price={239.0}
            rating={4}
            image="https://www.pngmart.com/files/6/Washing-Machine-PNG-File.png"
          />
        </div>
        <div className="home__row row">
          <Product
            id="4903850"
            title="SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display Screen, Pro "
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61ZNIHIEUqL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Kogan Active+ II Smart Watch (Black)
            "
            price={98.99}
            rating={5}
            image="https://cdn.productreview.com.au/resize/listing-picture/65aff28c-3d0d-4967-a92c-6fbc7e6b65ef?width=1200&height=630&withoutEnlargement=true&v=2"
          />
          <Product
            id="3254354345"
            title="Original iphone earpiece"
            price={598.99}
            rating={4}
            image="https://static-uc.olist.ng/upload/i03/20210121/1kssxemiaha9.jpg"
          />
          <Product
            id="4903850"
            title="C725 Series
            QLED 4K HDR  Dolby Vision Android TV"
            price={199.99}
            rating={3}
            image="https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/product/tv/p/p615/pc/product/EM_55P615_front_global.png"
          />
          <Product
            id="49538094"
            title="MODERN TV STAND WITH CENTRE TABLE"
            price={239.0}
            rating={3}
            image="https://images.yaoota.com/DRoqa8y1B8Q3xIQTwKQLZLu0ybY=/trim/yaootaweb-production-ng/media/crawledproductimages/3464b0ed397842e4ebb4d34e01fce761942308ae.jpg"
          />
        </div>


        <div className="home__row row">
          <Product
            id="90829332"
            title="HAIER LE32K6600GA 32 inch Android Smart LED TV
            "
            price={1094.98}
            rating={4}
            image="https://solatonline.ng/wp-content/uploads/2020/12/SAMSUNG-TV-BANNER.jpg"
          />
        </div>

        <div className="home__row row">
          <Product
            id="33689824"
            title="DuroMax DS4000S Portable Generator, Yellow/Black "
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71eXBBYjImL._AC_SL1200_.jpg"
          />
          <Product
            id="23445930"
            title="Blender for tomtato smoothie"
            price={98.99}
            rating={5}
            image="https://media.istockphoto.com/id/846435972/photo/prepartion-of-fresh-drink-blueberry-and-banana-smoothie-on-a-mixer.webp?s=612x612&w=is&k=20&c=8ZC3KJJdXANTiLP1G9uAG4jRTX06o88uqC5zYimvJGg="
          />
          <Product
            id="3254354345"
            title="22 danger signs to watch out for when using a gas cylinder"
            price={598.99}
            rating={4}
            image="https://thenationonlineng.net/wp-content/uploads/2020/02/gas-cylinder.jpg"
          />
          <Product
            id="4903850"
            title="Electrical Generators & Areas of Application"
            price={199.99}
            rating={3}
            image="https://criticalpower.com/wp-content/uploads/2019/04/Cummins-Generator.jpg"
          />
        </div> */}
      </div>
    </div>
  )
}
