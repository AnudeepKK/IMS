import inventoryImage from "../images/1.png";

const About = () =>{
  return (
    <div className="row align-items-center">
      <h2 style={{textAlign:"center"}}>PRAGATHI</h2>
      <div className="col-md-4 mx-auto">
        <img src={inventoryImage} alt="Inventory" className="img-fluid my-5 inventory-img" />
      </div>
      <div className="col-md-8 mx-auto">
        <p className="lead">
          <b style={{ fontSize: "20px" }}>In today's ever-evolving business landscape, students are taking on innovative projects to help small businesses optimize their operations. Our team of student developers has built a cutting-edge web platform using React, Axios, Mongoose, Express, CORS, and Nodemon to create an efficient inventory management solution. Using a MongoDB database, our platform enables small businesses to manage their inventory in real-time, ensuring timely and accurate decision-making. With our web platform, small business owners can keep track of inventory levels, monitor sales trends, and quickly make informed decisions that can have a positive impact on their bottom line. Our team is committed to using our skills and expertise to create a meaningful and effective solution that meets the needs of small businesses. We are proud to have built a powerful inventory management platform that can help businesses thrive in today's competitive market.
</b>
        </p>
        <p className="lead">
          <b style={{ fontSize: "20px" }}>Our inventory management system provides a centralized platform for managing your inventory. From here, you can track your inventory levels, manage your suppliers, and analyze your sales data to make informed business decisions. Use the links below to navigate to the different areas of our system:</b>
        </p>
      </div>
      <h3 style={{textAlign:"center"}}>Pragathi - Har Disha Mein</h3>
    </div>
  );
}

export default About;
