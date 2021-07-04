import React from "react";
import Contacts from "../../components/Contacts";

function Contact() {
  function handleBtn(event) {
    event.preventDefault();
    const id = event.target.id;
    switch (id) {
      case "email":
        window.open("mailto:dkmk1020@gmail.com");
        break;
      case "phone":
        window.open("tel:+16262086591");
        break;
      case "linkedin":
        window.open(
          "https://linkedin.com/in/derrick-helgeson-a6956a205",
          "_blank"
        );
        break;
      case "GitHub":
        window.open("https://github.com/derrick1020", "_blank");
        break;
      case "facebook":
        window.open("https://www.facebook.com/dk.helgeson", "_blank");
        break;
      case "resume":
        window.open(
          "https://docs.google.com/document/d/1xBoOS-83ajyQg6ticXg64W_2w4q4i3bcdUxLCge4UTQ/edit",
          "_blank"
        );
        break;
      default:
        return;
    }
  }

  return (
    <div>
      <Contacts handleBtn={handleBtn} />
    </div>
  );
}

export default Contact;
