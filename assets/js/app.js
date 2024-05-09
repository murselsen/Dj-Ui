const musicData = {
  music: [
    {
      id: 1,
      url: "https://youtu.be/Jt86Tk1Vk5o",
    },
    {
      id: 2,
      url: "https://youtu.be/Jt86Tk1Vk5o",
    },
    {
      id: 3,
      url: "https://youtu.be/Jt86Tk1Vk5o",
    },
    {
      id: 4,
      url: "https://youtu.be/Jt86Tk1Vk5o",
    } /*,
    {
      id: 5,
      url: "https://youtu.be/Jt86Tk1Vk5o",
    } ,
    {
      id: 6,
      url: "https://youtu.be/Jt86Tk1Vk5o",
    },
    {
      id: 7,
      url: "https://youtu.be/Jt86Tk1Vk5o",
    },
    {
      id: 8,
      url: "https://youtu.be/Jt86Tk1Vk5o",
    },
    {
      id: 9,
      url: "https://youtu.be/Jt86Tk1Vk5o",
    },
    {
      id: 10,
      url: "https://youtu.be/Jt86Tk1Vk5o",
    }, */,
  ],
};

/* Start - Load Music List */
const LoadMusicList = (list) => {
  let _list = list;
  console.log(_list);

  _list.forEach((music) => {
    $("#AppMusicList").append(
      `<div class="dj-app-music-list-item" id="music${music.id}">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
        <strong>
           <b class="badge bg-dark">${music.id}</b> ${music.url}
        </strong>
        </div>`
    );
  });
  if (_list.length > 3) {
    hg = $("#AppMusicList").height();
    hg = _list.length * 55;
    $("#AppMusicList").height(hg);
    console.log(`Music List - Height: ${hg}`);
  }
};
/* End - Load Music List */

/* Start - Music List Add */
const AddMusic = () => {};
/* End - Music List Add */

$(document).ready(() => {
  console.log("jQuery Document Ready !");
  LoadMusicList(musicData.music);

  $("#dj-app-music-content-toggle-btn").on("click", function (e) {
    $("#dj-app-music-add").hide();
    alert("app-music-add");
    $("#dj-app-music-content").toggle();
  });
  // dj-app-music-add-toggle-btn
  $("#dj-app-music-add-toggle-btn").on("click", function (e) {
    $("#dj-app-music-content").hide();
    alert("dj-app-music-content Closed");
    $("#dj-app-music-add").toggle();
  });

  const djAudio = $("#dj-audio");
  djAudio.on("playing", (e) => {
    console.log(e);
  });
  djAudio.on("timeupdate", (e) => {
    let progress = Number.parseInt(e.target.currentTime);
    let maxProgress = Number.parseInt(e.target.duration);

    $("#dj-audio-progress-data").attr("value", progress);
    $("#dj-audio-progress-data").attr("max", maxProgress);

    console.log(e.target.currentTime, "CurrentTime : ", progress);
    console.log(e.target.duration, "Full Time : ", maxProgress);
  });
});
