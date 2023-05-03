import './style.css';
import { Player, ControlBar, BigPlayButton, PlayToggle, Shortcut, LoadingSpinner, source } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"; // import css"
import landingVideo from '../../assets/videos/Finalweb.mp4'
import React, { useRef, Component } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import Modal from 'react-modal';
import LoginForm from '../../components/signup-form/LoginForm';
import RegForm from '../../components/signup-form/RegForm'
import { setAuthToken } from "../../services/setAuthToken";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LandingTwo from '../LandingPage2/LandingTwo';
import kgp from '../../assets/images/kgp.png';
import sflogo from '../../assets/images/SF_logo_white.png';
import { faExpand, faVolumeOff, faVolumeLow, faVolumeMute, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import song from "../../assets/sound/main_theme.mp3";
import intro_song from '../../assets/sound/intro_sound_long.mp3'
import bg_song from '../../assets/sound/main_theme_long.mp3'

import g_log from '../../assets/images/light_google_login.png'
import loginILU from '../../assets/images/sfILU.png';
import upBorder from '../../assets/images/UpBorder.png'
import downBorder from '../../assets/images/UpBorder.png'
import './SignInForm.css'
import gln from "../../assets/images/google.png"
import GoogleLogin from 'react-google-login';
import { googleLogin } from './landService';
import axios from 'axios';
import { gapi } from 'gapi-script';
import Mapbar from '../Mapbar/Mapbar';
import ReactGA from 'react-ga';

function withMyHook(Component) {
    return function WrappedComponent(props) {
        const { state } = useLocation();
        return <Component {...props} mystate={state} />;
    }
}


class LandingPage1 extends Component {

    // container = React.createRef()

    constructor(props) {
        super(props);
        this.state = {
            player: null,
            categoryHeading: '',
            categoryHeadingAnimClass: 'category-heading-hide',
            videoSource: landingVideo,
            videoStartTime: 9,
            prevnextbuttonVisibility: 'prev-next-btn-div-hide',
            snapVisibility: 'snap-show',

            modalIsOpen: false,
            modalLogOpen: false,

            auth: this.props.auth,
            login: false,

            volume: (this.props.voler)?(faVolumeHigh):(faVolumeMute),
            // audio: new Audio(intro_song),

            currentStall: 0,
            flagVisibility: 'event-flag-hide',
            eventBackVisibility: 'event-back-hide',
            eventDivVisibility: 'event-div-hide',
            lastPageBtnVisibility: 'event-last-page-btn-show',
            particularEventClass: 'particular-event-div-fade-in'
        }
    }

    //timestamps record
    landmassEndTime = 10;
    eventsToGalleryTime = { start: 10.8, end: 14.4 }
    galleryToScheduleTime = { start: 14.8, end: 18.5 }
    scheduleToEventsTime = { start: 18.8, end: 22.5 }

    // reverse
    eventsToScheduleTime = { start: 23, end: 26.5 }
    scheduleToGalleryTime = { start: 27.5, end: 31 }
    galleryToEventsTime = { start: 32, end: 35.6 }

    // 
    participateTransition = { start: 36, end: 37.8 }
    marketObj = [
        {
            stallNo: 1,
            category: "Dramatics",
            focusStartTime: 38.3,
            focusEndTime: 42.2,
            rightStart: 87.5,
            leftEnd: 150.3,
        },
        {
            stallNo: 2,
            category: "Dance",
            focusStartTime: 43,
            focusEndTime: 47.1,
            rightEnd: 90, //from 1-2
            rightStart: 91,
            leftEnd: 147, //from 3-2
            leftStart: 147.8
        },
        {
            stallNo: 3,
            category: "Music",
            focusStartTime: 47.91,
            focusEndTime: 51.8,
            rightEnd: 94, //from 2-3
            rightStart: 94.4,
            leftEnd: 143, //from 4-3
            leftStart: 143.9
        },
        {
            stallNo: 4,
            category: "Literary",
            focusStartTime: 52.8,
            focusEndTime: 56.7,
            rightEnd: 97.5, //from 3-4
            rightStart: 98,
            leftEnd: 140,
            leftStart: 140.6
        },
        {
            stallNo: 5,
            category: "Fashion",
            focusStartTime: 57.5,
            focusEndTime: 61.5,
            rightEnd: 101.1, //from 4-5
            rightStart: 101.8,
            leftEnd: 136.4,
            leftStart: 137
        },
        {
            stallNo: 6,
            category: "Film Fest",
            focusStartTime: 62.5,
            focusEndTime: 66.5,
            rightEnd: 104.5, //from 5-6
            rightStart: 105.4,
            leftEnd: 133,
            leftStart: 133.5
        },
        {
            stallNo: 7,
            category: "Quiz",
            focusStartTime: 67.8,
            focusEndTime: 71.8,
            rightEnd: 108, //from 5-6
            rightStart: 108.6,
            leftEnd: 129,
            leftStart: 130
        },
        {
            stallNo: 8,
            category: "Fine Arts",
            focusStartTime: 72.5,
            focusEndTime: 76.6,
            rightEnd: 111.2, //from 5-6
            rightStart: 112.2,
            leftEnd: 125.8,
            leftStart: 126.4
        },
        {
            stallNo: 9,
            category: "Humor Fest",
            focusStartTime: 77.5,
            focusEndTime: 81.5,
            rightEnd: 115, //from 5-6
            rightStart: 115.8,
            leftEnd: 122,
            leftStart: 122.8
        },
        {
            stallNo: 10,
            category: "Food Fest",
            focusStartTime: 82.5,
            focusEndTime: 86.5,
            rightEnd: 118.5, //from 5-6
            leftStart: 119.4
        }
    ]


    componentDidMount() {
        // this.bindScrollSnap()
        // subscribe state change
        this.setState({
            player: this.player.getState()
        });
        // console.log('hi ' + this.state.volume)
        // this.state.audio.pause();
        // this.player.forward(4);
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
        // this.props.setBackButtonFunc(this.backButtonReceiver.bind(this))
        if (window.location.pathname == "/") {
            // console.log("in /");
            if (this.props.mystate) {
                // console.log("location prop", this.props.mystate)
                window.history.replaceState({}, document.title);
                if (this.props.mystate.prevRoute){
                    this.setState({
                        videoStartTime: this.landmassEndTime
                    });
                    this.player.pause();
                }
            } else {
                this.setState({
                    videoStartTime: 1.5
                });
            }
            // this.player.seek(1);

        } else if (window.location.pathname == "/participate") {
            // console.log('in /participate');
            // this.player.seek(this.participateTransition.end);
            this.setState({
                videoStartTime: this.participateTransition.end + 0.2,
                flagVisibility: "event-flag-show"
            });
            this.player.pause();
            this.props.audio.src = bg_song;
            this.props.audio.load();
            //this.state.audio.play();
        }
        this.props.audio.loop = true;
        this.player.playbackRate = 1.25;
        ReactGA.pageview(window.location.pathname);
    }

    componentDidUpdate(){
        if(window.location.pathname == "/"){
            if(this.props.playvideo==1){
                console.log("playy")
                this.player.play();
                this.props.audio.play();
                this.props.setplayvideo(-1)
            } else if (this.props.playvideo==0) {
                console.log("paused")
                this.player.pause();
            }
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(window.location.pathname === '/participate') {
    //         this.setState({
    //             videoStartTime: 35
    //         })
    //     }
    // }

    // bindScrollSnap() {
    //     const element = this.container.current
    //     createScrollSnap(element, {
    //       snapDestinationY: '100vh',
    //       duration: 500,
    //     }, () => console.log('snapped'))
    //   }


    // backButtonReceiver = (lastpath) => {console.log("in backbutton receiver", lastpath)
    //     if(lastpath=="schedule") {console.log("sched")
    //         this.player.seek(this.galleryToScheduleTime.end);
    //         this.player.pause();
    //     } else if (lastpath=="gallery") {console.log("gall")
    //         this.player.seek(this.eventsToGalleryTime.end);
    //         this.player.pause();
    //     }
    // }

    FuncExecVar = this.handlePause;



    handlePause() {
        console.log('handlepause')
        if (this.state.player.currentTime >= this.landmassEndTime) {
            this.player.pause();
            this.props.audio.pause();
            this.props.audio.src = bg_song;
            this.props.audio.load();
            if(this.props.voler == true)
                this.props.audio.play();
            this.setState({
                categoryHeading: 'Participate',
                categoryHeadingAnimClass: 'category-heading-show',
                prevnextbuttonVisibility: 'prev-next-btn-div-show'
            })
            this.FuncExecVar = () => { };
        }
    }

    handleStateChange(PlayerState, prevState) {
        this.setState({
            player: PlayerState
        });
        // console.log(this.state.player.currentTime)
        this.FuncExecVar();
    }


    handleLandmassRotateStop = (nextCategoryHeading, endtime) => {
        if (this.state.player.currentTime >= endtime) {
            this.player.pause();
            this.setState({
                categoryHeading: nextCategoryHeading,
                categoryHeadingAnimClass: 'category-heading-show',
            })
            this.FuncExecVar = () => { };
        }
    }

    handleLandmassRotateStart = (nextCategoryHeading, startTime, endTime) => {
        this.player.seek(startTime);
        this.player.play();
        this.setState({
            player: this.player.currentTime,
            categoryHeadingAnimClass: 'category-heading-hide'
        })
        setTimeout(() => {
            this.setState({
                categoryHeading: ''
            })
        }, 500);
        this.FuncExecVar = () => { this.handleLandmassRotateStop(nextCategoryHeading, endTime) };
    }


    handlePrevClick() {
        // console.log('Pressed prev')
        this.player.playbackRate = 1.25;
        if (this.state.categoryHeading == 'Participate') {
            this.handleLandmassRotateStart("Schedule", this.eventsToGalleryTime.start, this.eventsToGalleryTime.end)
        }
        if (this.state.categoryHeading == 'Schedule') {
            this.handleLandmassRotateStart("Accommodation", this.galleryToScheduleTime.start, this.galleryToScheduleTime.end)
        }
        if (this.state.categoryHeading == 'Accommodation') {
            this.handleLandmassRotateStart("Participate", this.scheduleToEventsTime.start, this.scheduleToEventsTime.end)
        }
    }

    handleNextClick() {
        // console.log('Pressed next')
        this.player.playbackRate = 1.25;
        if (this.state.categoryHeading == 'Participate') {
            this.handleLandmassRotateStart("Accommodation", this.eventsToScheduleTime.start, this.eventsToScheduleTime.end)
        }
        if (this.state.categoryHeading == 'Schedule') {
            this.handleLandmassRotateStart("Participate", this.galleryToEventsTime.start, this.galleryToEventsTime.end)
        }
        if (this.state.categoryHeading == 'Accommodation') {
            this.handleLandmassRotateStart("Schedule", this.scheduleToGalleryTime.start, this.scheduleToGalleryTime.end)
        }
    }

    handleParticipateClick() {
        this.player.seek(this.participateTransition.start);
        this.player.play();
        this.setState({
            snapVisibility: 'snap-hide'
        })

        this.FuncExecVar = () => { this.handlePauseParticipate() };
    }

    handlePauseParticipate() {
        if (this.state.player.currentTime >= this.participateTransition.end) {
            this.player.pause();
            this.setState({
                flagVisibility: 'event-flag-show'
            })
            this.FuncExecVar = () => { };
        }
    }

    handleStallClick(stallNo) {
        // console.log(stallNo)
        this.player.seek(this.marketObj[stallNo - 1].focusStartTime);
        this.player.play();
        this.setState({
            flagVisibility: 'event-flag-hide',
            lastPageBtnVisibility: 'event-last-page-btn-hide'
        })

        this.FuncExecVar = () => { this.handlePauseStallFocus(stallNo) };
    }

    handlePauseStallFocus(stallNo) {
        if (this.state.player.currentTime >= this.marketObj[stallNo - 1].focusEndTime-0.1) {
            this.player.pause();
            this.setState({
                eventBackVisibility: 'event-back-show',
                currentStall: stallNo,
                eventDivVisibility: 'event-div-show'
            })
            this.FuncExecVar = () => { };
        }
    }

    handleEventBackClick() {
        this.setState({
            eventBackVisibility: 'event-back-hide',
            flagVisibility: 'event-flag-show',
            currentStall: 0,
            eventDivVisibility: 'event-div-hide',
            lastPageBtnVisibility: 'event-last-page-btn-show'
        })
        this.player.seek(this.participateTransition.end + 0.3);
        this.player.pause();
    }

    handleEventNextClick() {
        const stallNo = this.state.currentStall;
        // this.player.load();
        this.player.seek(this.marketObj[stallNo - 1].rightStart);
        this.player.play();

        this.setState({
            // eventDivVisibility: 'event-div-hide',
            particularEventClass: 'particular-event-div-slide-left'
        })

        this.FuncExecVar = () => { this.handlePauseStallNext() };
        // console.log(this.state.player.currentTime);
        // console.log("stall no: " + this.state.currentStall)
    }

    handlePauseStallNext() {
        const stallNo = this.state.currentStall;
        if (this.state.player.currentTime >= this.marketObj[stallNo].rightEnd && !this.state.player.paused) {
            this.player.pause();
            this.setState({
                // eventDivVisibility: 'event-div-show',
                particularEventClass: 'particular-event-div-fade-in',
                currentStall: stallNo + 1,
            })
            this.FuncExecVar = () => { };
            // setTimeout(() => {
            //     console.log(this.state.player.currentTime);
            //     console.log("stall no: " + this.state.currentStall)
            // }, 1000)
        }
    }

    handleEventPrevClick() {
        const stallNo = this.state.currentStall;
        this.player.seek(this.marketObj[stallNo - 1].leftStart);
        this.player.play();

        this.setState({
            // eventDivVisibility: 'event-div-hide',
            particularEventClass: 'particular-event-div-slide-right'
        })

        this.FuncExecVar = () => { this.handlePauseStallPrev() };
        // console.log(this.state.player.currentTime);
        // console.log("stall no: " + this.state.currentStall)
    }

    handlePauseStallPrev() {
        const stallNo = this.state.currentStall;
        if (this.state.player.currentTime >= this.marketObj[this.state.currentStall - 2].leftEnd && !this.state.player.paused) {
            this.player.pause();
            this.setState({
                currentStall: stallNo - 1,
                particularEventClass: 'particular-event-div-fade-in',
                // eventDivVisibility: 'event-div-show'
            })
            this.FuncExecVar = () => { };
            // setTimeout(() => {
            //     console.log(this.state.player.currentTime);
            //     console.log("stall no: " + this.state.currentStall)
            // }, 1000)
        }
    }

    // const [auth,setAuth] = useState(false);
    // const [login,setLogin] = useState(false);

    token = sessionStorage.getItem("token");
    setAuth() {
        this.token = sessionStorage.getItem("token");
        if (this.token) {
            setAuthToken(this.token);
            this.setState({
                auth: true
            })
            this.props.setAuth(true)
        }
    }

    customStyles = {
        content: {
            zIndex: '999',
            top: '10%',
            left: '8%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            //   borderColor:'red',
            //   borderWidth:2,

            //   transform: 'translate(-50%, -50%)',
            overflowY: 'hidden',
            overflowX: 'hidden',
            width: '83vw',
            height: '75vh',
            background: 'radial-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1))',
            border: 'none !important'

            //   background: 'radial-gradient(rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.) 10%)'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
    };
    // const [modalIsOpen, setIsOpen] = useState(false);
    // const [modalLogOpen, setLogOpen] = useState(false);
    openModal() {
        // setIsOpen(true);
        this.setState({
            modalIsOpen: false,
            modalLogOpen: true
        })
    }
    closeModal() {
        // setIsOpen(false);
        // setLogOpen(false);
        this.setState({
            modalIsOpen: false,
            modalLogOpen: false
        })
    }
    openModalLog() {
        // setLogOpen(true);
        // setIsOpen(false);
        this.setState({
            modalIsOpen: true,
            modalLogOpen: false
        })
    }

    responseGoogle = async (response) => {
        // console.log(response);
        let data = { token: response.tokenObj.id_token };
        const userData = await googleLogin(data);
        if (userData === "error") {
            toast.error("error signing in with google", { position: toast.POSITION.TOP_CENTER });
            return;
        }
        //console.log(userData);
        sessionStorage.setItem("data", JSON.stringify(userData.message));
        if (userData.message.reg_complete) {
            //await Store.setUserData(userData.message, response.profileObj.name, response.profileObj.email, response.profileObj.imageUrl);
            sessionStorage.setItem("name", response.profileObj.name);
            sessionStorage.setItem("email", response.profileObj.email);
            sessionStorage.setItem("token", userData.message.token);
            sessionStorage.setItem("data", JSON.stringify(userData.message));
            // props.setLoggedIn(true);
            axios.post("https://mainapi.springfest.in/api/user/get_registered_events", {
                                        token: userData.message.token
                                    }).then((resp) => {
                                        const msg = resp.data.message
                                        const keys = Object.keys(msg)
                                        console.log(msg)
                                        console.log(keys)
                                        var regevs = {}
                                        for (var i = 0; i < keys.length; i++) {
                                            var evs = msg[keys[i]]
                                            console.log(evs)
                                            for (var j = 0; j < evs.length; j++) {
                                                if (i === 1)
                                                    regevs[evs[j].event_id] = {
                                                        reg_id: evs[j].reg_id,
                                                        type: keys[i],
                                                        name: evs[j].event_name,
                                                        iscert: evs[j].is_cert
                                                    }
                                                else if (i === 0)
                                                    regevs[evs[j].event_id] = {
                                                        group_id: evs[j].group_id,
                                                        type: keys[i],
                                                        name: evs[j].event_name,
                                                        members: evs[j].members,
                                                        iscert: evs[j].is_cert,
                                                        leadersfid: evs[j].leader_id
                                                    }
                                            }
                                        }
                                        sessionStorage.setItem('reg_events', JSON.stringify(regevs))
                })
            this.setAuth(true)
            this.closeModal()
            toast.success("Logged in successfully", { position: toast.POSITION.TOP_CENTER });

        }
        else {
            toast.error("User registration not complete", { position: toast.POSITION.TOP_CENTER })
        }
    }

    playSound() {
        if (this.state.volume == faVolumeHigh && this.props.voler == true ) {
            this.props.audio.pause();
            this.setState({
                volume: faVolumeMute
            })
            // this.props.setState({
            //     voler: false
            // })
            this.props.volfunc();
        } else {
            this.props.audio.play();
            this.setState({
                volume: faVolumeHigh,
            })
            this.props.volfunc();
        }
    }

    getFullScreenElement() {
        return document.fullscreenElement
            || document.webkitFullscreenElement
            || document.mozFullscreenElement
            || document.msFullscreenElement;
    }

    toggleFullScreen() {
        if (document.fullscreenElement == null) {
            document.documentElement.requestFullscreen().catch(console.log);
            return;
        }
        if (document.fullscreenElement) {
            document.exitFullscreen()
                .then(() => console.log('hello'))
                .catch((error) => console.log(error));
        }
    }

    handleStartTime() {
        // console.log(window.location.pathname)
        if (window.location.pathname === '/') {
            return 7;
        } else if (window.location.pathname === '/participate') {
            return 46;
        }
    }

    playerSeekParticipate() {
        this.player.seek(this.landmassEndTime);
        this.player.pause();
        this.setState({
            snapVisibility: 'snap-show',
            flagVisibility: 'event-flag-hide'
        })
    }

    goup(){
        var ele = document.getElementById("forsnap-slider1")
        ele.scrollIntoView({
            behavior: "smooth", 
            block: "end", 
            inline: "nearest"
        })
    }


    render() {
        return (
            <div>
                <div id="container" >
                    <div className="for-snap" id="forsnap-slider1">
                        <Player
                            ref={player => {
                                this.player = player;
                            }}
                            poster="/assets/poster.png"
                            autoPlay={true}
                            fluid={false}
                            muted={true}
                            height={100}
                            startTime={this.state.videoStartTime}
                        >
                            <source src={this.state.videoSource} />
                            <Shortcut clickable={false} />
                            <ControlBar disableCompletely={true} />
                            <PlayToggle disabled />
                            <BigPlayButton position="center" disabled />
                            <LoadingSpinner disabled />
                        </Player>

                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            style={this.customStyles}>


                            {/* <RegForm/>
                <button onClick={this.openModal.bind(this)}>Login</button>
                <button onClick={this.closeModal.bind(this)}>Close</button> */}

                            <div className='loginOutDiv'>
                                <div className='loginHeader'> <span className='loginHeaderText'> SIGNUP </span>  <button className='closebtn' onClick={this.closeModal.bind(this)}>x</button>
                                </div>
                                <div className='loginContent'>
                                    <div className='UpperBorderdiv'>
                                        <img src={upBorder} alt="Logo" style={{ width: '100%', height: '1%' }} />
                                    </div>
                                    <div className='ILUFormdiv'>
                                        <div className='ILUdiv'><img src={loginILU} alt="Logo" style={{ width: '80%', height: '30%' }} /></div>
                                        <div className='RegFormdiv'>
                                            <RegForm auth={this.state.auth} setAuth={this.setAuth.bind(this)} login={this.login} setLogin={this.setLogin} closing={this.closeModal.bind(this)} />


                                            <div className="lowdiv" >
                                                {/* <div style={{ borderColor:'red' , borderWidth:'2' ,display:'flex' , flexDirection:'row' , margin:0 , justifyContent:'center'}}> 
                                <span style={{color:"white" , marginRight: 2}}>OR LOGIN WITH</span>
                                 <button className="googlebtn" style={{marginRight:15}} > OR LOGIN WITH GOOGLE </button></div> */}
                                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', padding: 10, paddingLeft: 0, justifyContent: 'space-evenly', marginTop: 20, marginRight: 10 }}> <button onClick={this.openModal.bind(this)} style={{ marginLeft: 2, background: 'transparent' }} className="googlebtn" >LOGIN</button> <button onClick={()=>{}} className="googlebtn">FORGOT PASSWORD</button></div>
                                            </div>



                                            {/* <div>or login with</div>
                            <div><button onClick={this.openModalLog.bind(this)}>Register</button> forget</div> */}




                                        </div>
                                    </div>
                                    <div className='LowerBorderdiv'>
                                        <img src={downBorder} alt="Logo" style={{ width: '100%', height: '1%' }} />
                                    </div>
                                </div>
                            </div>
                        </Modal>
                        <Modal
                            isOpen={this.state.modalLogOpen}
                            onRequestClose={this.closeModal}
                            style={this.customStyles}>
                            <div className='loginOutDiv'>
                                <div className='loginHeader'> <span className='loginHeaderText'> LOG IN </span>  <button className='closebtn' onClick={this.closeModal.bind(this)}>x</button>
                                </div>
                                <div className='loginContent'>
                                    <div className='UpperBorderdiv'>
                                        <img src={upBorder} alt="Logo" style={{ width: '100%', height: '1%' }} />
                                    </div>
                                    <div className='ILUFormdiv'>
                                        <div className='ILUdiv'><img src={loginILU} alt="Logo" style={{ width: '80%', height: '30%' }} /></div>
                                        <div className='Formdiv'>
                                            <LoginForm auth={this.state.auth} setAuth={this.setAuth.bind(this)} login={this.login} setLogin={this.setLogin} closing={this.closeModal.bind(this)} />


                                            <div className="lowdiv" >
                                                <div style={{ borderColor: 'red', borderWidth: '2', display: 'flex', flexDirection: 'row', margin: 0, justifyContent: 'center' }}>
                                                    <span className='orLoginWith'><p>OR &nbsp;&nbsp;</p></span> 
                                                    <div className="googlebtn" style={{ marginRight: '3.2vw' }} > 
                                                        <GoogleLogin
                                                            autoLoad={false}
                                                            clientId="866436313854-dpc0isf1g5qo24odjo6f5h6cps42j2fr.apps.googleusercontent.com"
                                                            buttonText="Sign in with Google"
                                                            cookiePolicy={'single_host_origin'}
                                                            render={(renderProps) => (
                                                                <span onClick={renderProps.onClick}style={{ background: 'transparent' }}>
                                                                    <img src={g_log} style={{height:'2.7rem'}}/>
                                                                </span>
                                                            )}
                                                            theme = "light"
                                                            onSuccess={this.responseGoogle}
                                                            onFailure={() => { return; }}
                                                            isSignedIn={false}
                                                        /></div></div>
                                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', padding: 10, paddingLeft: 0, justifyContent: 'space-evenly', marginTop: 20, marginRight: 10 }}> <button onClick={this.openModalLog.bind(this)} style={{ marginLeft: 2, background: 'transparent', fontSize: '24px' }} className="googlebtn btnGlow" >REGISTER</button> 
                                                {/* <button style={{ fontSize: '24px' }} className="googlebtn btnGlow">FORGOT PASSWORD</button> */}
                                                </div>
                                            </div>



                                            {/* <div>or login with</div>
                            <div><button onClick={this.openModalLog.bind(this)}>Register</button> forget</div> */}




                                        </div>
                                    </div>
                                    <div className='LowerBorderdiv'>
                                        <img src={downBorder} alt="Logo" style={{ width: '100%', height: '1%' }} />
                                    </div>
                                </div>
                            </div>

                            {/* <LoginForm auth={this.auth} setAuth={this.setAuth.bind(this)} login={this.login} setLogin={this.setLogin} closing={this.closeModal.bind(this)}/>
                <span>Not logged in yet?</span>
                <button onClick={this.openModalLog.bind(this)}>Register</button>
                <button onClick={this.closeModal.bind(this)}>Close</button> */}
                        </Modal>
                        <div className={`${this.state.prevnextbuttonVisibility} loginbtn`}>
                            {(this.state.auth) ? (<Link to="/dashboard"><button className='Login lp1-signInButton button-48'>DASHBOARD</button></Link>) : (<button onClick={this.openModal.bind(this)} className='Login button-48'><span>SIGN IN</span></button>)}


                            {/* <LandingTwo onclickFunc={this.openModal.bind(this)} token={this.token} /> */}


                        </div>

                        <div className={`${this.state.prevnextbuttonVisibility} lp1-icons`}>
                            <FontAwesomeIcon icon={this.state.volume} className="fa-2xs lp1-icon-1" onClick={this.playSound.bind(this)}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faExpand} onClick={this.toggleFullScreen.bind(this)} className="fa-2xs lp1-icon-2"></FontAwesomeIcon>
                        </div>

                        <Outlet context={{
                            landingState: this.state,
                            landingSetState: this.setState,
                            handlePrevClickFunc: this.handlePrevClick.bind(this),
                            handleNextClickFunc: this.handleNextClick.bind(this),
                            handleParticipateClick: this.handleParticipateClick.bind(this),
                            handleStallClick: this.handleStallClick.bind(this),
                            handleEventBackClick: this.handleEventBackClick.bind(this),
                            handleEventPrevClick: this.handleEventPrevClick.bind(this),
                            handleEventNextClick: this.handleEventNextClick.bind(this),
                            playerSeekParticipate: this.playerSeekParticipate.bind(this),
                            marketObj: this.marketObj
                        }} />

                    <div className='navmap'>
                                <Mapbar pclick = {this.handleEventBackClick.bind(this)} setv = {this.props.audio}/>
                    </div>

                    </div>
                    <div className={`for-snap ${this.state.snapVisibility}`} id="forsnap-slider2">
                        <div className="lander2bg">
                            <LandingTwo token={this.token} auth={this.state.auth} setv={this.props.audio}/>
                            <div className="closex" onClick={this.goup}>
                                &#x2716;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withMyHook(LandingPage1);
