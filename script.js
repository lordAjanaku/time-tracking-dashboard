"use strict";

const timeFrame = document.querySelector(".time-frames");
const trackingCard = document.querySelectorAll(".card__category");

const datas = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

timeFrame.addEventListener("click", (e) => {
  const timeFrameData = [];

  //   return/terminate function if no button is clicked
  if (!e.target.classList.contains("btn")) return;

  //   remove active style from buttons
  timeFrame.querySelectorAll(".btn").forEach((btn) => {
    btn.classList.remove("btn--active");
  });
  //   add active style to button clicked
  e.target.classList.add("btn--active");

  //option to used in getiing datas
  const timeOption = e.target.dataset.option;

  // add data to array
  datas.forEach((data) => {
    timeFrameData.push(data.timeframes[timeOption]);
  });

  //   changing the data on dashboard
  trackingCard.forEach((card, index) => {
    const current = card.querySelector(".current");
    const previous = card.querySelector(".previous");

    current.textContent = `${timeFrameData[index].current}hrs`;
    previous.textContent = `${timeFrameData[index].previous}hrs`;
  });
});
