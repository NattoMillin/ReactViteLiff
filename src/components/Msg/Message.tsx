import liff from "@line/liff";
import { FormValues } from "../Home";

export const RtnMsg = async () => {
  console.log("RtnMsg start");
  if (liff.isInClient()) {
    // LIFFので動いているのであれば
    await liff
      .sendMessages([
        {
          // メッセージを送信する
          type: "text",
          text: "You've successfully sent a message! Hooray!",
        },
      ])
      .then(function () {
        window.alert("Message sent");
      })
      .catch(function (error) {
        window.alert("Error sending message: " + error);
      });
  } else {
    const profile = await liff.getProfile();
    console.log(JSON.stringify(profile));
  }
};

export const getUserInfo = async () => {
  console.log("getUserInfo start");
  if (liff.isInClient()) {
    await liff
      .getProfile() // ユーザ情報を取得する
      .then((profile) => {
        const userId: string = profile.userId;
        const displayName: string = profile.displayName;
        alert(`Name: ${displayName}, userId: ${userId}`);
      })
      .catch(function (error) {
        window.alert("Error sending message: " + error);
      });
  } else {
    const profile = await liff.getProfile();
    console.log(JSON.stringify(profile));
  }
};


export const submitReternMessage = async (data: FormValues) => {
  console.log("submitReternMessage start");
  const retrunMsg = `${data.FirstName}\n${data.SelectItem}`
  if (liff.isInClient()) {
    // LIFFので動いているのであれば
    await liff
      .sendMessages([
        {
          // メッセージを送信する
          type: "text",
          text: retrunMsg,
        },
      ])
      .then(function () {
        window.alert("Message sent");
      })
      .catch(function (error) {
        window.alert("Error sending message: " + error);
      });
  } else {
    console.log(retrunMsg);
  }
};
