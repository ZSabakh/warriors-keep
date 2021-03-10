import React from "react";
import "./FounderInfo.css";

const FounderInfo = () => {
  return (
    <div className="founder_container">
      <div className="founder_info">
        <h1>Darren Pool</h1>
        <h4>Founder and Executive director of "Warriors Keep"</h4>
        <h7>
          <i>SSGT. Military ranks</i>
        </h7>
      </div>
      <hr />
      <div className="founder_story">
        <img src="http://www.poolroom.com/wp-content/uploads/2017/04/darrenappleton.jpg" />
        <div className="founder_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
            suspendisse sed nisi lacus sed viverra. Morbi enim nunc faucibus a
            pellentesque sit. Eros in cursus turpis massa tincidunt. Pretium
            lectus quam id leo in vitae turpis massa. Parturient montes nascetur
            ridiculus mus mauris. Sit amet purus gravida quis blandit turpis
            cursus in hac. Mattis aliquam faucibus purus in massa tempor nec.
            Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Euismod
            quis viverra nibh cras pulvinar mattis nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            risus nullam eget felis eget. Cras adipiscing enim eu turpis egestas
            pretium. Feugiat scelerisque varius morbi enim nunc. Vitae suscipit
            tellus mauris a. Condimentum id venenatis a condimentum. Volutpat
            maecenas volutpat blandit aliquam etiam erat velit scelerisque.
            Dignissim suspendisse in est ante in nibh. Congue nisi vitae
            suscipit tellus mauris a diam.
          </p>
          <ul>
            <li>
              <img src="https://png.pngtree.com/png-vector/20201028/ourmid/pngtree-phone-icon-in-solid-circle-png-image_2380227.jpg" />
              <p>+1-000-000</p>
            </li>
            <li>
              <img src="https://www.pngfind.com/pngs/m/30-307198_circle-fb-logo-sticker-facebook-png-transparent-png.png" />
              <p>Connect</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FounderInfo;
