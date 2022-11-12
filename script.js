var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
var barColors = [
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(28, 10%, 53%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
];
var hoverColors = [
  "hsl(10, 79%, 65%, .75)",
  "hsl(10, 79%, 65%, .75)",
  "hsl(28, 10%, 53%, .75)",
  "hsl(10, 79%, 65%, .75)",
  "hsl(10, 79%, 65%, .75)",
  "hsl(10, 79%, 65%, .75)",
  "hsl(10, 79%, 65%, .75)",
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        borderWidth: 1,
        borderRadius: 3,
        borderSkipped: false,
        hoverBackgroundColor: hoverColors,
      },
    ],
  },
  options: {
    onHover: function (event, chartElement) {
      if (chartElement.length == 1) {
        event.native.target.style.cursor = "pointer";
      } else if (chartElement.length == 0) {
        event.native.target.style.cursor = "default";
      }
    },
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: function (context) {
            let title = "";
            if (context[0].parsed.y !== null) {
              title += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context[0].parsed.y);
            }
            return title;
          },

          label: function (context) {
            console.log(this.x);
            let label = context.dataset.label;
            return label;
          },
        },
      },
    },
  },
});
