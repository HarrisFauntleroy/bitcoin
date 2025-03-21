// Chart configuration and data
const chartConfigs = {
  // Currency Purchasing Power Chart
  currencyPurchasingPowerChart: {
    type: "line",
    data: {
      labels: [
        "1913",
        "1930",
        "1950",
        "1970",
        "1980",
        "1990",
        "2000",
        "2010",
        "2020",
        "2025",
      ],
      datasets: [
        {
          label: "US Dollar",
          data: [100, 80, 50, 35, 25, 18, 13, 10, 5, 4],
          borderColor: "#f2a900",
          backgroundColor: "rgba(242, 169, 0, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
        },
        {
          label: "Euro",
          data: [null, null, null, null, 100, 85, 65, 50, 40, 35],
          borderColor: "#3498db",
          backgroundColor: "rgba(52, 152, 219, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
        },
        {
          label: "Japanese Yen",
          data: [null, null, 100, 80, 65, 50, 30, 20, 15, 12],
          borderColor: "#e74c3c",
          backgroundColor: "rgba(231, 76, 60, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: false,
        },
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + "% of original value";
              }
              return label;
            },
          },
        },
        legend: {
          position: "top",
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Year",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Purchasing Power (%)",
          },
          min: 0,
          max: 100,
        },
      },
    },
  },

  // Supply Comparison Chart
  supplyComparisonChart: {
    type: "line",
    data: {
      labels: [
        "2009",
        "2012",
        "2016",
        "2020",
        "2024",
        "2028",
        "2032",
        "2036",
        "2040",
      ],
      datasets: [
        {
          label: "Bitcoin Supply (millions)",
          data: [1, 10.5, 15.5, 18.5, 19.5, 20.2, 20.6, 20.8, 20.9],
          borderColor: "#f2a900",
          backgroundColor: "rgba(242, 169, 0, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.3,
          yAxisID: "y",
        },
        {
          label: "Fiat Money Supply Growth (trillions USD)",
          data: [50, 60, 73, 90, 105, 125, 145, 170, 200],
          borderColor: "#e74c3c",
          backgroundColor: "rgba(231, 76, 60, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          yAxisID: "y1",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        tooltip: {
          mode: "index",
          intersect: false,
        },
        legend: {
          position: "top",
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Year",
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          title: {
            display: true,
            text: "Bitcoin Supply (millions)",
          },
          min: 0,
          max: 21,
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          title: {
            display: true,
            text: "Fiat Money Supply (trillions USD)",
          },
          min: 0,
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  },

  // Monetary Properties Chart (Radar)
  monetaryPropertiesChart: {
    type: "radar",
    data: {
      labels: [
        "Scarcity",
        "Durability",
        "Portability",
        "Divisibility",
        "Verifiability",
        "Fungibility",
        "Censorship Resistance",
      ],
      datasets: [
        {
          label: "Bitcoin",
          data: [95, 100, 95, 100, 100, 90, 95],
          borderColor: "#f2a900",
          backgroundColor: "rgba(242, 169, 0, 0.2)",
          borderWidth: 2,
          pointBackgroundColor: "#f2a900",
        },
        {
          label: "Gold",
          data: [80, 90, 40, 50, 70, 95, 70],
          borderColor: "#DAA520",
          backgroundColor: "rgba(218, 165, 32, 0.2)",
          borderWidth: 2,
          pointBackgroundColor: "#DAA520",
        },
        {
          label: "Fiat Currency",
          data: [20, 40, 70, 85, 40, 80, 15],
          borderColor: "#3498db",
          backgroundColor: "rgba(52, 152, 219, 0.2)",
          borderWidth: 2,
          pointBackgroundColor: "#3498db",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.dataset.label + ": " + context.raw + "/100";
            },
          },
        },
      },
      scales: {
        r: {
          angleLines: {
            display: true,
          },
          suggestedMin: 0,
          suggestedMax: 100,
        },
      },
    },
  },

  // Adoption Growth Chart
  adoptionGrowthChart: {
    type: "line",
    data: {
      labels: [
        "2010",
        "2012",
        "2014",
        "2016",
        "2018",
        "2020",
        "2022",
        "2024",
        "2026 (est.)",
        "2028 (est.)",
        "2030 (est.)",
      ],
      datasets: [
        {
          label: "Active Addresses (millions)",
          data: [0.01, 0.1, 1.5, 5, 15, 30, 50, 80, 150, 300, 500],
          borderColor: "#2ecc71",
          backgroundColor: function (context) {
            if (!context.chart.chartArea) {
              return;
            }
            return getGradient(
              context.chart.ctx,
              context.chart.chartArea,
              "rgba(46, 204, 113, 0.1)",
              "rgba(46, 204, 113, 0.4)"
            );
          },
          borderWidth: 3,
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + " million";
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Year",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Users (Millions)",
          },
          type: "logarithmic",
        },
      },
    },
  },

  // Energy Comparison Chart
  energyComparisonChart: {
    type: "bar",
    data: {
      labels: [
        "Bitcoin Network",
        "Global Banking System",
        "Gold Mining",
        "Data Centers",
        "Household Devices on Standby (US)",
      ],
      datasets: [
        {
          label: "Annual Energy Consumption (TWh)",
          data: [130, 650, 240, 200, 320],
          backgroundColor: [
            "#f2a900",
            "#3498db",
            "#DAA520",
            "#9b59b6",
            "#e74c3c",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + " TWh";
              }
              return label;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Terawatt-hours (TWh) per Year",
          },
        },
      },
    },
  },

  // Mining Energy Sources Chart
  miningEnergySourcesChart: {
    type: "pie",
    data: {
      labels: [
        "Hydro",
        "Solar/Wind",
        "Nuclear",
        "Natural Gas",
        "Coal",
        "Other",
      ],
      datasets: [
        {
          data: [35, 21, 5, 23, 10, 6],
          backgroundColor: [
            "#3498db",
            "#2ecc71",
            "#9b59b6",
            "#f39c12",
            "#7f8c8d",
            "#e74c3c",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.parsed || 0;
              return label + ": " + value + "%";
            },
          },
        },
      },
    },
  },

  // Hashrate Growth Chart
  hashrateGrowthChart: {
    type: "line",
    data: {
      labels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022", "2024"],
      datasets: [
        {
          label: "Network Hashrate (EH/s)",
          data: [0.0000001, 0.0001, 0.1, 1, 40, 120, 220, 580],
          borderColor: "#e74c3c",
          backgroundColor: "rgba(231, 76, 60, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                if (context.parsed.y < 0.001) {
                  return label + context.parsed.y * 1000000 + " MH/s";
                } else if (context.parsed.y < 1) {
                  return label + context.parsed.y * 1000 + " PH/s";
                } else {
                  return label + context.parsed.y + " EH/s";
                }
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Year",
          },
        },
        y: {
          type: "logarithmic",
          display: true,
          title: {
            display: true,
            text: "Hashrate (EH/s - logarithmic scale)",
          },
        },
      },
    },
  },

  // Adoption S-Curve Chart
  adoptionSCurveChart: {
    type: "line",
    data: {
      labels: ["2010", "2015", "2020", "2025", "2030", "2035", "2040"],
      datasets: [
        {
          label: "Bitcoin Users (millions)",
          data: [0.1, 10, 100, 500, 2000, 3500, 4500],
          borderColor: "#f2a900",
          backgroundColor: function (context) {
            if (!context.chart.chartArea) {
              return;
            }
            return getGradient(
              context.chart.ctx,
              context.chart.chartArea,
              "rgba(242, 169, 0, 0.1)",
              "rgba(242, 169, 0, 0.4)"
            );
          },
          borderWidth: 3,
          fill: true,
          tension: 0.4,
        },
        {
          label: "Global Internet Adoption (millions, historical)",
          data: [360, 2000, 4000, 6000, null, null, null],
          borderColor: "#3498db",
          borderDash: [5, 5],
          borderWidth: 2,
          tension: 0.4,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + " million";
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Year",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Users (Millions)",
          },
        },
      },
    },
  },

  // Stock-to-Flow Chart
  stockToFlowChart: {
    type: "bar",
    data: {
      labels: [
        "USD",
        "EUR",
        "Silver",
        "Gold",
        "Bitcoin 2020",
        "Bitcoin 2024",
        "Bitcoin 2028",
      ],
      datasets: [
        {
          label: "Stock-to-Flow Ratio",
          data: [4, 5, 22, 62, 55, 120, 240],
          backgroundColor: [
            "#3498db",
            "#2980b9",
            "#bdc3c7",
            "#f1c40f",
            "#f39c12",
            "#e67e22",
            "#d35400",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = "Stock-to-Flow: ";
              if (context.parsed.y !== null) {
                label += context.parsed.y;
                if (context.parsed.y === 1) {
                  label += " year";
                } else {
                  label += " years";
                }
              }
              return label;
            },
            afterLabel: function (context) {
              const index = context.dataIndex;
              const asset = context.chart.data.labels[index];

              if (asset.includes("Bitcoin")) {
                return "Years until supply doubles";
              } else {
                return (
                  "Annual inflation: ~" +
                  (100 / context.parsed.y).toFixed(1) +
                  "%"
                );
              }
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Years to Double Supply",
          },
        },
      },
    },
  },

  // Volatility Chart
  volatilityChart: {
    type: "line",
    data: {
      labels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022", "2024"],
      datasets: [
        {
          label: "30-Day BTC Volatility",
          data: [16, 8, 5, 3.5, 4, 3, 2.5, 2],
          borderColor: "#e74c3c",
          backgroundColor: "rgba(231, 76, 60, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
        },
        {
          label: "30-Day S&P 500 Volatility",
          data: [1.2, 0.8, 0.6, 0.7, 0.8, 2.5, 1.2, 0.8],
          borderColor: "#3498db",
          backgroundColor: "rgba(52, 152, 219, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
        },
        {
          label: "30-Day Gold Volatility",
          data: [1.1, 0.9, 0.8, 0.9, 0.7, 1.2, 0.8, 0.7],
          borderColor: "#f1c40f",
          backgroundColor: "rgba(241, 196, 15, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + "%";
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Year",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Daily Volatility (%)",
          },
        },
      },
    },
  },

  // Network Security Chart (Hash Rate)
  networkSecurityChart: {
    type: "line",
    data: {
      labels: [
        "2009",
        "2011",
        "2013",
        "2015",
        "2017",
        "2019",
        "2021",
        "2023",
        "2025",
      ],
      datasets: [
        {
          label: "Network Hash Rate (EH/s)",
          data: [0.000000001, 0.00001, 0.001, 0.5, 10, 50, 180, 400, 650],
          borderColor: "#2ecc71",
          backgroundColor: "rgba(46, 204, 113, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                if (context.parsed.y < 0.000001) {
                  return label + context.parsed.y * 1000000000 + " GH/s";
                } else if (context.parsed.y < 0.001) {
                  return label + context.parsed.y * 1000000 + " TH/s";
                } else if (context.parsed.y < 1) {
                  return label + context.parsed.y * 1000 + " PH/s";
                } else {
                  return label + context.parsed.y + " EH/s";
                }
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Year",
          },
        },
        y: {
          type: "logarithmic",
          display: true,
          title: {
            display: true,
            text: "Hash Rate (logarithmic scale)",
          },
        },
      },
    },
  },
};

// Function to initialize charts
function initializeCharts(specificChartId = null) {
  for (const [chartId, config] of Object.entries(chartConfigs)) {
    if (specificChartId && chartId !== specificChartId) continue;

    const chartElement = document.getElementById(chartId);
    if (chartElement && !chartElement.chart) {
      chartElement.chart = new Chart(chartElement, config);
    }
  }
}

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all charts
  initializeCharts();
});
