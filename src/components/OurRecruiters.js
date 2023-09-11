import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
//import { BsCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import wiproLogo from "../assets/company_logos/wipro.jpeg";
import amazon from "../assets/company_logos/amazon.png";
import byjus from "../assets/company_logos/byjus.png";
import cognizant from "../assets/company_logos/cognizant.png";
import accenture from "../assets/company_logos/accenture.png";
import infosys from "../assets/company_logos/infosys.png";
import walmartglobaltech from "../assets/company_logos/walmartglobaltech.jpeg";
import capgemini from "../assets/company_logos/capgemini.webp";
import csscrop from "../assets/company_logos/csscorp.jpeg";
import vodafone from "../assets/company_logos/vodafone.png";
import agilent from "../assets/company_logos/agilent.png";
import ericsson from "../assets/company_logos/ericsson.png";
import bisleri from "../assets/company_logos/bisleri.png";
import drdo from "../assets/company_logos/drdo.png";
import jio from "../assets/company_logos/jio.jpg";
import invectus from "../assets/company_logos/invectus.png";
import allsec from "../assets/company_logos/allsec.png";
import railway from "../assets/company_logos/IndianRailway.png";
import zaloni from "../assets/company_logos/zaloni.png";
import itcinfotec from "../assets/company_logos/itcinfotec.png";
import indianOil from "../assets/company_logos/IndianOil.png";
import visteon from "../assets/company_logos/visteon.png";
import testbook from "../assets/company_logos/testbook.png";
import mcafee from "../assets/company_logos/mcafee.png";
import evertz from "../assets/company_logos/evertz.png";
import simens from "../assets/company_logos/siemens.png";
import jpmorgan from "../assets/company_logos/jpmorgan.png";
import zwayam from "../assets/company_logos/zwayam.jpg";
import klar from "../assets/company_logos/klar.jpg";
import tiger from "../assets/company_logos/tiger.jpg";
import speakify from "../assets/company_logos/speakify.png";
import mindtree from "../assets/company_logos/mindtree.jpg";
import fidelity from "../assets/company_logos/fidelity.png";
import delo from "../assets/company_logos/delo.png";
import syno from "../assets/company_logos/synopsys.png";
import nic from "../assets/company_logos/nic.png";
import openfive from "../assets/company_logos/openfive.png";
import samsung from "../assets/company_logos/samsung.png";
import cisco from "../assets/company_logos/cisco.png";
import qualcom from "../assets/company_logos/qualcomm.png";
import dell from "../assets/company_logos/dell.png";
import ct from "../assets/company_logos/ct.jpg";
import cgi from "../assets/company_logos/cgi.png";
import intel from "../assets/company_logos/intel.png";
import flipcart from "../assets/company_logos/flipcart.jpeg";
import hp from "../assets/company_logos/hp.jpg";
import carelon from "../assets/company_logos/carelon.png";
import geek from "../assets/company_logos/geek.png";
import sutherland from "../assets/company_logos/sutherland.png";
import capace from "../assets/company_logos/capace.jpg";
import apt from "../assets/company_logos/apt.jpg";
import flash from "../assets/company_logos/flash.jpg";
import adityabirla from "../assets/company_logos/aditya.png";
import resustain from "../assets/company_logos/re.png";
import dristi from "../assets/company_logos/dristi.png";
import amul from "../assets/company_logos/amul.jpg";
import ditto from "../assets/company_logos/ditto.png";
import gyanhomm from "../assets/company_logos/gyan.jpg";
import britania from "../assets/company_logos/britannia.png";
import ntpc from "../assets/company_logos/ntpc.png";
import ongc from "../assets/company_logos/ongc.jpg";
import parle from "../assets/company_logos/parle.png";
import simplistic from "../assets/company_logos/simplistic.jpg";
import latent from "../assets/company_logos/latent.jpg";
import Layout from "./Layout";

const OurRecruiters = (props) => {
  const [isOpenFirst] = useState(true);
  //const [isOpen, setIsOpen] = useState(true);
  //const toggle = () => {
  // setIsOpen(!isOpen);
  //};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Recruiters CITK">
      <div className="pr-outer-container">
        <h1 className="pr-main-heading">Students Adding Values At</h1>
        <Collapse isOpen={isOpenFirst}>
          <div className="pr-inner-wrapper">
            <div className="pr-inner-box">
              <div className="pr-inner-row">
                <img src={walmartglobaltech} alt="walmartglobaltech" />
                <img src={amazon} alt="amazon" />
                <img src={samsung} alt="samsung" />
                <img src={mcafee} alt="mcafee" />
                <img src={flipcart} alt="flipcart" />
              </div>

              <div className="pr-inner-row">
                <img src={cisco} alt="cisco" />

                <img src={qualcom} alt="qualcom" />
                <img src={jpmorgan} alt="jpmorgan" />

                <img src={intel} alt="intel" />
                <img src={accenture} alt="accenture" />
              </div>

              <div className="pr-inner-row">
                <img src={infosys} alt="infosys" />
                <img src={cognizant} alt="cognizant" />
                <img src={capgemini} alt="capgemini" />
                <img src={wiproLogo} alt="wiproLogo" />
                <img src={csscrop} alt="csscrop" />
              </div>

              <div className="pr-inner-row">
                <img src={testbook} alt="testbook" />
                <img src={klar} alt="klar" />
                <img src={evertz} alt="evertz" />
                <img src={mindtree} alt="mindtree" />
                <img src={fidelity} alt="fidelity" />
              </div>

              <div className="pr-inner-row">
                <img src={simens} alt="simens" />
                <img src={delo} alt="delo" />
                <img src={syno} alt="syno" />
                <img src={nic} alt="nic" />
                <img src={openfive} alt="openfive" />
              </div>

              <div className="pr-inner-row">
                <img src={carelon} alt="carelon" />
                <img src={speakify} alt="speakify" />
                <img src={hp} alt="hp" />
                <img src={dell} alt="dell" />
                <img src={ct} alt="ct" />
              </div>

              <div className="pr-inner-row">
                <img src={cgi} alt="cgi" />
                <img src={geek} alt="geek" />
                <img src={tiger} alt="tiger" />
                <img src={zwayam} alt="zwayam" />
                <img src={tiger} alt="tiger" />
              </div>

              <div className="pr-inner-row">
                <img src={allsec} alt="allsec" />
                <img src={railway} alt="railways" />
                <img src={zaloni} alt="zaloni" />
                <img src={itcinfotec} alt="itcinfotec" />
                <img src={indianOil} alt="indianOil" />
              </div>

              <div className="pr-inner-row">
                <img src={vodafone} alt="vodafone" />
                <img src={byjus} alt="byjus" />
                <img src={agilent} alt="agilent" />
                <img src={drdo} alt="drdo" />
                <img src={jio} alt="jio" />
              </div>

              <div className="pr-inner-row">
                <img src={ericsson} alt="ericsson" />
                <img src={bisleri} alt="bisleri" />
                <img src={simplistic} alt="simplistic" />
                <img src={latent} alt="latent" />
                <img src={invectus} alt="invectus" />
              </div>

              <div className="pr-inner-row">
                <img src={visteon} alt="visteon" />
                <img src={sutherland} alt="sutherland" />
                <img src={capace} alt="capace" />
                <img src={apt} alt="apt" />
                <img src={flash} alt="flash" />
              </div>

              <div className="pr-inner-row">
                <img src={adityabirla} alt="adityabirla" />
                <img src={resustain} alt="resustain" />
                <img src={dristi} alt="dristi" />
                <img src={amul} alt="amul" />
                <img src={ditto} alt="ditto" />
              </div>

              <div className="pr-inner-row">
                <img src={gyanhomm} alt="gyanhomm" />
                <img src={britania} alt="britania" />
                <img src={parle} alt="parle" />
                <img src={ntpc} alt="ntpc" />
                <img src={ongc} alt="ongc" />
              </div>
              <h3>And many more...</h3>
            </div>
          </div>
        </Collapse>
      </div>
    </Layout>
  );
};

export default OurRecruiters;
