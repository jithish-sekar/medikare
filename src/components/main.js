import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import LandingPage from './landingpage';
import Aboutus from './aboutus';
import Contactus from './talktodoc';
import Creator from './creator';
import Englishmedicine from './englishmedicine';
import Ayurvedicmedicine from './ayurvedicmedicine';
import GeneralPhysician from './eng_generalphysician';
import FormValidation from './formvalidation';
import WomensIssues from './eng_womensissues';
import GeneralPhysicianAyur from './ayur_generalphysician';
import HairScalp from './eng_hairandscalp';
import StressMentalHealth from './eng_stressandmental';
import SkinProblems from './eng_skinproblems';
import PregnancyProblems from './eng_pregnancyproblem';
import hairandscalpayur from './ayur_hairandscalp';
import pregnancyproblemsayur from './ayur_pregnancyproblem';
import skinproblems from './ayur_skinprobprolems';
import StressMentalHealthayur from './ayur_stressandmental';
import womensissuesayur from './ayur_womensissues';

const Main = () => (
    <Switch>
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/creator" component={Creator} />
        {/*     <Route path="/home" component={Home} /> */}
        <Route exact path="/englishmedicine" component={Englishmedicine} />
        <Route exact path="/ayurvedicmedicine" component={Ayurvedicmedicine} />
        <Route exact path="/englishmedicine/generalphysician" component={GeneralPhysician} />
        <Route exact path="/englishmedicine/womensissues" component={WomensIssues} />
        <Route exact path="/formvalidation" component={FormValidation} />
        <Route exact path="/ayurvedicmedicine/generalphysician" component={GeneralPhysicianAyur} />
        <Route exact path="/englishmedicine/hairandscalp" component={HairScalp} />
        <Route exact path="/englishmedicine/stressandmental" component={StressMentalHealth} />
        <Route exact path="/englishmedicine/skinproblems" component={SkinProblems} />
        <Route exact path="/englishmedicine/pregnancyproblems" component={PregnancyProblems} />
        <Route exact path="/ayurvedicmedicine/hairandscalp" component={hairandscalpayur} />
        <Route exact path="/ayurvedicmedicine/pregnancyproblem" component={pregnancyproblemsayur} />
        <Route exact path="/ayurvedicmedicine/skinproblem" component={skinproblems} />
        <Route exact path="/ayurvedicmedicine/stressandmentalhealth" component={StressMentalHealthayur} />
        <Route exact path="/ayurvedicmedicine/womensissues" component={womensissuesayur} />
        <Route exact path="/footerhome" component={LandingPage} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/footercreator" component={Creator} />
        <Route exact path="/footerdoctor" component={FormValidation} />
        <Route exact path="/home" component={LandingPage} />
        <Redirect from="" to="/home" />
        <Redirect from="/" redirect="/home" />
    </Switch>

)
export default withRouter(Main);

