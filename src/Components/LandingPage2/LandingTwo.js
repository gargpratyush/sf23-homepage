import React, { useState, useEffect } from "react";
import "./LandingTwo.css";
import SF_logo_white from "../../assets/images/SF_logo_white.png";
import kgpLogo from "../../assets/images/kgp.png";
import Reactangle_1 from "../../assets/images/Rectangle_1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Rectangle_2 from "../../assets/images/Rectangle_2.png";
import _ from "../../assets/images/_.png";
import horizontalLINE_long from "../../assets/images/horizontalLINE_long.png";
import accoms_img from "../../assets/images/accoms_img.png";
import ring from "../../assets/images/ring.png";
import acu from "../../assets/images/accunder.png";
import game_img from "../../assets/images/game_img.png";
import merch_img from "../../assets/images/merch_img.png";
import tour_img from "../../assets/images/tour.png";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LandingTwo(props) {
  const navigate = useNavigate();
  const [FAQsModalOpen, setFAQsModalOpen] = useState(false);
  function closeFAQsModalHandler() {
    setFAQsModalOpen(false);
  }
  function openFAQsModalHandler() {
    setFAQsModalOpen(true);
  }
  function audpausefunc() {
    props.setv.pause();
  }
  return (
    <>
      <div className="landingTwo">
        {/* <div className="logos">
        <a href="http://www.iitkgp.ac.in/" target="_blank"><img src={kgpLogo} alt="kgpLogo" height={48} /></a>
        <a href="https://springfest.in/" target="_blank"><img src={SF_logo_white} alt="SF_logo" height={58} width={190} /></a>
      </div> */}

        {/* <div className="loginbtn">
        <button className="btnCustom">LOGIN / REGISTER</button>
      </div> */}

        <div className="rectParentDIV">
          <div className="rectangle_1Parent">
            <img
              src={Reactangle_1}
              alt="Rectangle_1"
              className="rectangle_1Parent_img"
            />
            <div className="rect1_links">
              <a
                className="btnCustom1 rect1_linksbtn"
                href="https://team.springfest.in/"
                target="_blank"
              >
                TEAM
              </a>
              <img src={_} className="rect1_links_separator" alt="separator" />
              <a
                className="btnCustom1 rect1_linksbtn"
                href="https://sponsors.springfest.in/"
                target="_blank"
              >
                SPONSORS
              </a>
              <img src={_} className="rect1_links_separator" alt="separator" />
              <a
                className="btnCustom1 rect1_linksbtn"
                href="https://www.youtube.com/watch?v=9yOinUUiyq0"
                target="_blank"
              >
                AFTERMOVIE
              </a>
              <img src={_} className="rect1_links_separator" alt="separator" />
              <a
                className="btnCustom1 rect1_linksbtn"
                href="https://drive.google.com/file/d/1T_LfPR4LauHQgbs-U65DQY8F7LYPZB-U/view"
                target="_blank"
              >
                VAANI
              </a>
              <img src={_} className="rect1_links_separator" alt="separator" />
              <a
                className="btnCustom1 rect1_linksbtn"
                onClick={openFAQsModalHandler}
              >
                FAQs
              </a>
            </div>
          </div>
          <div className="rectangle_2Parent">
            <img
              src={Rectangle_2}
              alt="Rectangle_2"
              className="rectangle_2Parent_img"
            />
            <div className="horizontalLINE_long_div">
              <img src={horizontalLINE_long} alt="horizontalLINE_long" />
            </div>

            <div class="landingrow">
              <div className="Landingrow_C">
                <Link to="/gallery" onClick={audpausefunc}>
                  <div className="accoms_new_section">
                    <div className="accoms_new_image">
                      <img
                        src={ring}
                        alt="ring"
                        className="accoms_new_image_ring"
                      />
                      <img
                        src={accoms_img}
                        alt="accoms_img"
                        className="accoms_new_image_accoms"
                      />
                    </div>
                    <div className="accoms_new_text">
                      <p
                        style={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.2vw",
                          marginBottom: "-1rem",
                          marginTop: '1rem'
                        }}
                      >
                        TIME PORTAL
                      </p>
                      <img src={acu} alt="acu" className="accoms_new_under" />
                    </div>
                  </div>
                </Link>

                <div
                  onClick={() => {
                    console.log(props.auth);
                    if (!props.auth) {
                      toast.error("Please Login First to Play");
                      // navigate("/");
                    } else {
                      audpausefunc();
                      navigate("/game");
                    }
                  }}
                >
                  <div className="game_new_section">
                    <div className="accoms_new_image">
                      <img
                        src={ring}
                        alt="ring"
                        className="accoms_new_image_ring"
                      />
                      <img
                        src={game_img}
                        alt="game_img"
                        className="game_new_image_game"
                      />
                    </div>
                    <div className="game_new_text">
                      <p
                        style={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.2vw",
                          marginBottom: "-1rem",
                          marginTop: '1rem'
                        }}
                      >
                        GAME
                      </p>
                      <img src={acu} alt="acu" className="accoms_new_under" />
                    </div>
                  </div>
                </div>

                <Link to="/merchandise">
                  <div className="merch_new_section">
                    <div className="accoms_new_image">
                      <img
                        src={ring}
                        alt="ring"
                        className="accoms_new_image_ring"
                      />
                      <img
                        src={merch_img}
                        alt="merch_img"
                        className="merch_new_image_merch"
                      />
                    </div>
                    <div className="merch_new_text">
                      <p
                        style={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.2vw",
                          marginBottom: "-1rem",
                          marginTop: '1rem'
                        }}
                      >
                        MERCH
                      </p>
                      <img src={acu} alt="acu" className="accoms_new_under" />
                    </div>
                  </div>
                </Link>

                <a href="https://live.springfest.in/" target="_blank">
                  <div className="game_new_section">
                    <div className="accoms_new_image">
                      <img
                        src={ring}
                        alt="ring"
                        className="accoms_new_image_ring"
                      />
                      <img
                        src={tour_img}
                        alt="tour_img"
                        className="tour_new_image_tour"
                      />
                    </div>
                    <div className="game_new_text">
                      <p
                        style={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.2vw",
                          marginBottom: "-1rem",
                          marginTop: '1rem'
                        }}
                      >
                        KGP TOUR
                      </p>
                      <img src={acu} alt="acu" className="accoms_new_under" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="social_icon_P">
                <div id="facebook_icon_div">
                  <a
                    href="https://www.facebook.com/springfest.iitkgp"
                    target="_blank"
                  >
                    <svg
                      width="47"
                      height="60"
                      viewBox="0 0 400 400"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#e8b684"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M272.726 141.984C273.098 135.052 273.648 125.015 271.608 123.054C255.765 107.828 212.768 117.183 204.653 137.881C199.523 150.966 197.475 168.838 198.509 191.497C182.326 191.497 173.252 192.478 171.29 194.441C169.457 196.274 169.207 226.805 171.29 226.805C179.836 226.805 195.884 228.765 195.884 228.765C195.884 228.765 196.507 307.565 195.884 308.205C193.028 311.142 100.434 308.205 87.9858 308.205C81.2678 308.205 87.9858 207.248 87.9858 196.297C87.9858 188.474 87.1682 99.9269 87.9858 99.1058C91.4077 95.6496 124.248 96.4225 129.235 96.4225C158.815 96.4225 286.533 81.619 306.698 93.824C315.258 99.0083 313.925 132.462 313.925 140.446C313.925 152.139 313.494 302.686 309.915 308.205C306.698 313.168 237.284 310.456 232.822 308.205C231.461 307.519 231.461 281.892 232.822 231.326C254.855 233.924 265.872 232.417 265.872 226.805C265.872 215.909 265.872 202.606 265.872 198.111C265.872 195.665 255.666 194.441 235.254 194.441C234.623 177.082 235.847 165.322 238.927 159.16C243.88 149.252 249.046 150.925 262.121 152.72"
                          stroke="#e8b684"
                          stroke-opacity="0.9"
                          stroke-width="16"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />{" "}
                      </g>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/iitkgp.springfest/?hl=en"
                    target="_blank"
                  >
                    <svg
                      width="38"
                      height="45"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 2C9.284 2 8.944 2.01133 7.87733 2.06C6.81267 2.10867 6.08533 2.278 5.44933 2.52533C4.78267 2.776 4.178 3.16933 3.678 3.67867C3.16948 4.17809 2.77591 4.78233 2.52467 5.44933C2.27867 6.08533 2.10867 6.81333 2.06 7.878C2.012 8.944 2 9.28333 2 12C2 14.7167 2.01133 15.056 2.06 16.1227C2.10867 17.1873 2.278 17.9147 2.52533 18.5507C2.776 19.2173 3.16933 19.822 3.67867 20.322C4.1781 20.8305 4.78234 21.2241 5.44933 21.4753C6.08533 21.722 6.81267 21.8913 7.87733 21.94C8.944 21.9887 9.284 22 12 22C14.716 22 15.056 21.9887 16.1227 21.94C17.1873 21.8913 17.9147 21.722 18.5507 21.4747C19.2173 21.224 19.822 20.8307 20.322 20.3213C20.8305 19.8219 21.2241 19.2177 21.4753 18.5507C21.722 17.9147 21.8913 17.1873 21.94 16.1227C21.9887 15.056 22 14.716 22 12C22 9.284 21.9887 8.944 21.94 7.87733C21.8913 6.81267 21.722 6.08533 21.4747 5.44933C21.2236 4.78204 20.83 4.17755 20.3213 3.678C19.8219 3.16948 19.2177 2.77591 18.5507 2.52467C17.9147 2.27867 17.1867 2.10867 16.122 2.06C15.056 2.012 14.7167 2 12 2ZM12 3.802C14.67 3.802 14.9867 3.812 16.0413 3.86C17.016 3.90467 17.5453 4.06667 17.898 4.20467C18.3647 4.38533 18.698 4.60267 19.048 4.952C19.398 5.302 19.6147 5.63533 19.7953 6.102C19.9327 6.45467 20.0953 6.984 20.14 7.95867C20.188 9.01333 20.198 9.33 20.198 12C20.198 14.67 20.188 14.9867 20.14 16.0413C20.0953 17.016 19.9333 17.5453 19.7953 17.898C19.6353 18.3324 19.3799 18.7253 19.048 19.048C18.7254 19.38 18.3324 19.6354 17.898 19.7953C17.5453 19.9327 17.016 20.0953 16.0413 20.14C14.9867 20.188 14.6707 20.198 12 20.198C9.32933 20.198 9.01333 20.188 7.95867 20.14C6.984 20.0953 6.45467 19.9333 6.102 19.7953C5.66764 19.6353 5.27467 19.3799 4.952 19.048C4.62012 18.7253 4.36475 18.3323 4.20467 17.898C4.06733 17.5453 3.90467 17.016 3.86 16.0413C3.812 14.9867 3.802 14.67 3.802 12C3.802 9.33 3.812 9.01333 3.86 7.95867C3.90467 6.984 4.06667 6.45467 4.20467 6.102C4.38533 5.63533 4.60267 5.302 4.952 4.952C5.27463 4.62003 5.66761 4.36465 6.102 4.20467C6.45467 4.06733 6.984 3.90467 7.95867 3.86C9.01333 3.812 9.33 3.802 12 3.802Z"
                          fill="#e8b684"
                        />{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 15.3367C11.5618 15.3367 11.128 15.2504 10.7231 15.0827C10.3183 14.915 9.95047 14.6692 9.64064 14.3594C9.3308 14.0495 9.08502 13.6817 8.91734 13.2769C8.74965 12.8721 8.66335 12.4382 8.66335 12C8.66335 11.5618 8.74965 11.1279 8.91734 10.7231C9.08502 10.3183 9.3308 9.95046 9.64064 9.64062C9.95047 9.33078 10.3183 9.08501 10.7231 8.91732C11.128 8.74964 11.5618 8.66333 12 8.66333C12.885 8.66333 13.7336 9.01487 14.3594 9.64062C14.9851 10.2664 15.3367 11.1151 15.3367 12C15.3367 12.8849 14.9851 13.7336 14.3594 14.3594C13.7336 14.9851 12.885 15.3367 12 15.3367ZM12 6.86C10.6368 6.86 9.32942 7.40153 8.36549 8.36547C7.40155 9.32941 6.86002 10.6368 6.86002 12C6.86002 13.3632 7.40155 14.6706 8.36549 15.6345C9.32942 16.5985 10.6368 17.14 12 17.14C13.3632 17.14 14.6706 16.5985 15.6345 15.6345C16.5985 14.6706 17.14 13.3632 17.14 12C17.14 10.6368 16.5985 9.32941 15.6345 8.36547C14.6706 7.40153 13.3632 6.86 12 6.86ZM18.6353 6.76667C18.6353 7.0889 18.5073 7.39794 18.2795 7.6258C18.0516 7.85366 17.7426 7.98167 17.4204 7.98167C17.0981 7.98167 16.7891 7.85366 16.5612 7.6258C16.3334 7.39794 16.2053 7.0889 16.2053 6.76667C16.2053 6.44443 16.3334 6.13539 16.5612 5.90753C16.7891 5.67968 17.0981 5.55167 17.4204 5.55167C17.7426 5.55167 18.0516 5.67968 18.2795 5.90753C18.5073 6.13539 18.6353 6.44443 18.6353 6.76667Z"
                          fill="#e8b684"
                        />{" "}
                      </g>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/sfiitkgp/"
                    target="_blank"
                  >
                    <svg
                      width="38"
                      height="45"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M22 3.47059V20.5294C22 20.9194 21.845 21.2935 21.5692 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47056C3.08053 22 2.70648 21.8451 2.43069 21.5693C2.15491 21.2935 1.99997 20.9194 1.99997 20.5294V3.47059C1.99997 3.08056 2.15491 2.70651 2.43069 2.43073C2.70648 2.15494 3.08053 2 3.47056 2H20.5294C20.9194 2 21.2935 2.15494 21.5692 2.43073C21.845 2.70651 22 3.08056 22 3.47059V3.47059ZM7.88232 9.64706H4.94115V19.0588H7.88232V9.64706ZM8.14703 6.41176C8.14858 6.18929 8.10629 5.96869 8.02258 5.76255C7.93888 5.55642 7.81539 5.36879 7.65916 5.21039C7.50294 5.05198 7.31705 4.92589 7.1121 4.83933C6.90715 4.75277 6.68715 4.70742 6.46468 4.70588H6.41173C5.95931 4.70588 5.52541 4.88561 5.20549 5.20552C4.88558 5.52544 4.70585 5.95934 4.70585 6.41176C4.70585 6.86419 4.88558 7.29809 5.20549 7.61801C5.52541 7.93792 5.95931 8.11765 6.41173 8.11765V8.11765C6.63423 8.12312 6.85562 8.0847 7.06325 8.00458C7.27089 7.92447 7.46071 7.80422 7.62186 7.65072C7.78301 7.49722 7.91234 7.31346 8.00245 7.10996C8.09256 6.90646 8.14169 6.6872 8.14703 6.46471V6.41176ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7798 9.77345C13.2576 10.0397 12.8142 10.4383 12.4941 10.9294H12.4117V9.64706H9.64703V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.368 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
                          stroke="#e8b684"
                          stroke-linejoin="round"
                        />{" "}
                      </g>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="https://twitter.com/springfest_kgp?lang=en"
                    target="_blank"
                  >
                    <svg
                      width="38"
                      height="45"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M21.9999 5.9246C21.2644 6.25051 20.4744 6.47071 19.6437 6.57025C20.4911 6.06289 21.1411 5.25782 21.4477 4.29948C20.6549 4.76984 19.7767 5.1116 18.8422 5.29481C18.0935 4.49855 17.0277 4 15.8474 4C13.5819 4 11.7445 5.8374 11.7445 8.10464C11.7445 8.42526 11.7815 8.73707 11.8502 9.03832C8.43877 8.86656 5.41666 7.23263 3.39252 4.75046C3.04019 5.35823 2.8376 6.06289 2.8376 6.81335C2.8376 8.23677 3.56252 9.4937 4.66267 10.2292C3.98972 10.2072 3.35729 10.0231 2.80413 9.71567V9.76852C2.80413 11.7565 4.21786 13.4151 6.09577 13.7921C5.75049 13.8855 5.38847 13.9348 5.015 13.9348C4.75075 13.9348 4.49267 13.9102 4.24252 13.8626C4.76485 15.4921 6.27987 16.6795 8.07587 16.7112C6.67095 17.8122 4.90137 18.4684 2.97942 18.4684C2.64823 18.4684 2.32144 18.449 1.99994 18.4112C3.8162 19.5765 5.97246 20.2547 8.28903 20.2547C15.8377 20.2547 19.9644 14.0026 19.9644 8.58029C19.9644 8.40412 19.9599 8.2262 19.952 8.05003C20.7536 7.47045 21.4494 6.74905 21.9982 5.92724L21.9999 5.9246Z"
                          stroke="#e8b684"
                          stroke-linejoin="round"
                        />{" "}
                      </g>
                    </svg>
                  </a>
                </div>
                <div id="youtube_icon_div">
                  <a
                    href="https://www.youtube.com/c/SpringFestForever"
                    target="_blank"
                  >
                    <svg
                      fill="#000000"
                      width="38"
                      height="50"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Youtube">
                          {" "}
                          <g>
                            {" "}
                            <path
                              d="M19.437,19.937H4.562a2.5,2.5,0,0,1-2.5-2.5V6.563a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5V17.437A2.5,2.5,0,0,1,19.437,19.937ZM4.562,5.063a1.5,1.5,0,0,0-1.5,1.5V17.437a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V6.563a1.5,1.5,0,0,0-1.5-1.5Z"
                              stroke="#e8b684"
                            />{" "}
                            <path
                              d="M14.568,11.149,10.6,8.432a1.032,1.032,0,0,0-1.614.851v5.434a1.032,1.032,0,0,0,1.614.851l3.972-2.717A1.031,1.031,0,0,0,14.568,11.149Z"
                              stroke="#e8b684"
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <span style={{fontSize:'1rem', color:''}}>&#169; Springfest 2023 | <Link className="privacy_link" to='privacy-policy' >Privacy Policy</Link> </span>
              </div>
            
            <div className="horizontalLINE1_long_div">
              <img src={horizontalLINE_long} alt="horizontalLINE_long" />
            </div></div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={FAQsModalOpen}
        onRequestClose={closeFAQsModalHandler}
        style={{
          content: {
            border: "none",
            height: "80vh",
            width: "80vw",
            top: "11%",
            left: "10%",
            backgroundColor: "rgba(0, 0, 0, 0.78)",
            overflowX: "hidden",
            overflowY: "auto",
            opacity: "0.9",
            padding: "0",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: "16",
          },
        }}
      >
        <button
          className="closeButtonLogin"
          onClick={closeFAQsModalHandler}
          style={{ position: "relative", left: "0.5rem", top: "1rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
            />
            <path
              fill-rule="evenodd"
              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
            />
          </svg>
        </button>
        <div className="FAQsParent_div">
          <div className="headingFAQ">
            <span>FAQS</span>
          </div>
          <div className="horizontalLINE_img_div">
            <img src={horizontalLINE_long} alt="horizontalLINE_long" />
          </div>
          <div className="contentFAQ_parent">
            <div className="contentFAQS">
              <span className="questionFAQS">
                What are the dates of Spring Fest 2023?
              </span>
              <span className="answersFAQS">
                The 64th Edition of Spring Fest will be organised from 26th to
                29th January 2023.
              </span>
            </div>
            <div className="contentFAQS">
              <span className="questionFAQS">
                What is the duration of the registration process during the
                fest?
              </span>
              <span className="answersFAQS">
                Registration process will start from 24th and will be open
                during all the time of fest except for 6pm to 11pm during the
                time of star nights. Entry to the star nights will only be
                allowed after the completion of registration.
              </span>
            </div>
            <div className="contentFAQS">
              <span className="questionFAQS">
                Would any transportation services be provided to reach the
                campus?
              </span>
              <span className="answersFAQS">
                Yes, Transportation services(Buses and Cargo) would be provided
                by Spring Fest from Kharagpur Railway Station to inside the
                Campus without any charges.
              </span>
            </div>
            <div className="contentFAQS">
              <span className="questionFAQS">
                Where should I report first in IIT Kharagpur when reaching
                inside the Campus?
              </span>
              <span className="answersFAQS">
                Reaching inside the campus, participants have to first report to
                the Registration Desk of Spring Fest situated near the
                Department of Computer Science and Engineering and the Main
                Building.
              </span>
            </div>
            <div className="contentFAQS">
              <span className="questionFAQS">
                How can I participate in Spring Fest 2023?
              </span>
              <span className="answersFAQS">
                You can register on the site, after which you'd come across the
                dashboard, from their you can choose to register for multiple
                events fulfilling their respective criteria. The payment portal
                of Spring Fest would soon be released and you may pay the fees
                after that inside the site itself. You can participate in events
                after registering and paying the registration fees of Spring
                Fest only. Paying the registration fees provides you with
                accomodation and starnights passes.
              </span>
            </div>
            <div className="contentFAQS">
              <span className="questionFAQS">
                Who are the celebrities which are going to perform at the star
                nights of Spring Fest 2023?
              </span>
              <span className="answersFAQS">
                The celebrities performing at the star nights of Spring Fest
                2023 will be announced soon from the facebook page of Spring
                Fest, IIT Kharagpur.
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LandingTwo;