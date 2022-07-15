import React from "react";
import Preloader from "../../../assets/common/Preloader/Preloader";
import a from "./Profileinfo.module.css";
import ProfileinfoStatusWithHooks from "./ProfileinfoStatusWithHooks";
import userPhoto from "../../../assets/img/gordon.jpg";

const Profileinfo = ({ profile }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
        <img src="https://www.nippon.com/ru/ncommon/contents/japan-data/369851/369851.jpg" />
      </div> */}
      <div className={a.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt=""/>
        <Block profile={profile}/>
        <ProfileinfoStatusWithHooks status={"Hello"} />
      </div>
    </div>
  );
};

const Block = ({ profile }) => {
  return (
    <div>
      <div>
        <b>My name</b>: {profile.fullName}
      </div>
      <div>
        <b>Lokking for a job</b>: {profile.lookinForAJob ? "yes" : "no"}
      </div>
      {profile.lookinForAJob && (
        <div>
          <b>My profesional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitile={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitile, contactValue }) => {
  return (
    <div>
      <b>{contactTitile}</b>: {contactValue}
    </div>
  );
};

export default Profileinfo;
