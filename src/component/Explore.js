import React, { Component } from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PieChartIcon from '@material-ui/icons/PieChart';
import WidgetsIcon from '@material-ui/icons/Widgets';
import ExtensionIcon from '@material-ui/icons/Extension';
import SearchIcon from '@material-ui/icons/Search';

class Explore extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <div className="topNav text-light d-flex justify-content-around">
                        <div></div>
                        <div>
                            <img src="https://cdn.worldvectorlogo.com/logos/invision.svg" className="logoImg" />
                        </div>
                        <div><WidgetsIcon />CHANNELS</div>
                        <div className="text-white-50"><BookmarkIcon />BOOKMARKS</div>
                        <div className="text-white-50"><PieChartIcon />OVERVIEW</div>
                        <div className="text-white-50"><ExtensionIcon />WIDGETS</div>
                        <div></div>
                        <div></div>
                        <div>
                            <span>
                                <SearchIcon />
                            </span>
                            <span>
                                <img src="https://www.xing.com/image/7_0_a_8b3e07c17_15962515_3/lea-schneider-foto.1024x1024.jpg" className="leaImg mx-3" />
                            </span>
                            <span className="h5 mt-4">Lea Schneider</span>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="navbar d-flex justify-content-around bg-light">
                    <div></div>
                    <div></div>
                    <div className="text-primary">Trending</div>
                    <div>For You</div>
                    <div>Cooking</div>
                    <div>Nature</div>
                    <div>Science</div>
                    <div>Travel</div>
                    <div>Climate</div>
                    <div>Music</div>
                    <div>People</div>
                    <div></div>
                    <div className="line"></div>
                    <div></div>
                    <button className="button font-weight-bold btn btn-outline-secondary">Explore</button>
                    <div></div>
                </div>

                <div className="container mt-5">
                    <div class="card-deck">
                        <div class="card" style={{"height":"100%"}}>
                            <img src="https://proveg.com/wp-content/uploads/2018/04/Foodplate.jpg" class="card-img-top" style={{ "height": "215px" }} alt="..." />
                            <div class="card-body d-flex justify-content-between p-3">
                                <h2 class="card-title">Cooking <h6 class="text-secondary">6.5M Followers</h6></h2><br/>
                                <img src="https://www.humanpro.ch/wp-content/uploads/Renate_Raschendorfer_2.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_2_6_25747ae13_6694527_5/ariana-r%C3%B6thlisberger-foto.256x256.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_3_8_d0ba9fba8_16931203_1/stefan-schmid-foto.256x256.jpg" className="smallImg"/>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <div className="nature">Following</div>
                            </div>
                        </div>
                        <div class="card" style={{"height":"50%"}}>
                            <img src="https://img-aws.ehowcdn.com/350x235p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/ac77c2154f3144a884620fb080d846dc.jpg" style={{ "height": "215px" }} class="card-img-top" alt="..." />
                            <div class="card-body d-flex justify-content-between p-3">
                                <h2 class="card-title">Nature <h6 class="text-secondary">400k Followers</h6></h2><br/>
                                <img src="https://www.humanpro.ch/wp-content/uploads/Renate_Raschendorfer_2.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_2_6_25747ae13_6694527_5/ariana-r%C3%B6thlisberger-foto.256x256.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_3_8_d0ba9fba8_16931203_1/stefan-schmid-foto.256x256.jpg" className="smallImg"/>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <div className="nature" style={{ "width": "130px" }}>Following</div>
                            </div>
                        </div>
                        <div class="card" style={{"height":"100%"}}>
                            <img src="https://previews.123rf.com/images/kzenon/kzenon1503/kzenon150302056/37893765-family-of-four-in-shopping-mall-with-bags.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-flex justify-content-between p-3">
                                <h2 class="card-title">Travel <h6 class="text-secondary">404k Followers</h6></h2><br/>
                                <img src="https://www.humanpro.ch/wp-content/uploads/Renate_Raschendorfer_2.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_2_6_25747ae13_6694527_5/ariana-r%C3%B6thlisberger-foto.256x256.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_3_8_d0ba9fba8_16931203_1/stefan-schmid-foto.256x256.jpg" className="smallImg"/>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <div className="follow">Follow</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div class="card-deck">
                        <div class="card" style={{"height":"100%"}}>
                            <img src="https://www.element.com/-/media/images/services/materials-testing/ftir-analysis-card-640x480.jpg?h=480&w=640&la=en&hash=341C96FA7225ABFB6EDA3C130104C3E1DA5F64B2" class="card-img-top" style={{ "height": "215px" }} alt="..." />
                            <div class="card-body d-flex justify-content-between p-3">
                                <h2 class="card-title">Science <h6 class="text-secondary">202k Followers</h6></h2><br/>
                                <img src="https://www.humanpro.ch/wp-content/uploads/Renate_Raschendorfer_2.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_2_6_25747ae13_6694527_5/ariana-r%C3%B6thlisberger-foto.256x256.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_3_8_d0ba9fba8_16931203_1/stefan-schmid-foto.256x256.jpg" className="smallImg"/>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <div className="follow">Follow</div>
                            </div>
                        </div>
                        <div class="card" style={{"height":"50%"}}>
                            <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QLXW3JWA3I5AHBWU5NYU5EXSJM.jpg&w=767" style={{ "height": "215px" }} class="card-img-top" alt="..." />
                            <div class="card-body d-flex justify-content-between p-3">
                                <h2 class="card-title">Climate <h6 class="text-secondary">2M Followers</h6></h2><br/>
                                <img src="https://www.humanpro.ch/wp-content/uploads/Renate_Raschendorfer_2.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_2_6_25747ae13_6694527_5/ariana-r%C3%B6thlisberger-foto.256x256.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_3_8_d0ba9fba8_16931203_1/stefan-schmid-foto.256x256.jpg" className="smallImg"/>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <div className="follow" style={{ "width": "130px" }}>Follow</div>
                            </div>
                        </div>
                        <div class="card" style={{"height":"100%"}}>
                            <img src="https://robertvincentpeacemusic.files.wordpress.com/2015/09/girl-listening-music-1680-1050-7947.jpg" class="card-img-top" alt="..." />
                            <div class="card-body d-flex justify-content-between p-3">
                                <h2 class="card-title">Music <h6 class="text-secondary">80k Followers</h6></h2><br/>
                                <img src="https://www.humanpro.ch/wp-content/uploads/Renate_Raschendorfer_2.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_2_6_25747ae13_6694527_5/ariana-r%C3%B6thlisberger-foto.256x256.jpg" className="smallImg"/>
                                <img src="https://www.xing.com/image/c_3_8_d0ba9fba8_16931203_1/stefan-schmid-foto.256x256.jpg" className="smallImg"/>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <div className="follow">Follow</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="d-flex justify-content-around footer mt-5 text-black-50">
                    <div></div>
                    <div>About</div>
                    <div>Terms and Conditions</div>
                    <div>Privacy Policy</div>
                    <div>Contact</div>
                    <div></div>
                    <div>
                        <img src="https://blog.skyprivate.com/wp-content/uploads/2018/10/facebook-twitter-instagram-png-3.png" className="socialIcon" />
                    </div>
                    <div>@2019 All rights reserved</div>
                    <div></div>
                </div>

                        </div>
                        )
                    }
                }
                
                export default Explore
