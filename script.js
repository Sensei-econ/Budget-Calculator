// ===== Revenue DATA MODEL =====
const revenueData = {
  baseQuantity: 100,
  baseUnit: "unit",
  pctChange: 0,
  productSales: { name: "Product Sales", price: 0  },
  otherSales: { name: "Other Sales", quantity: 1, unit: "year", price: 0 }
};

// ===== VARIABLE COSTS DATA MODEL =====
// "fuel" type: quantity is computed (trips * milesPerTrip / mpg), not directly editable
// "simple" type: quantity is directly editable
const variableCostCategories = [
    {
    name: "Fuel & Oil",
    items: [
      // --- General subsection (simple style) ---
      { id: "fuelYear", name: "Fuel", type: "simple", quantity: 0, unit: "year", cost: 3.75, subheading: "General" },
      { id: "oilYear", name: "Oil", type: "simple", quantity: 0, unit: "year", cost: 3.75 },

      // --- Itemized subsection (what you had before, minus Equipment and Transport) ---
      { id: "fuelTruck",  name: "Truck",  type: "fuel", trips: 0, milesPerTrip: 10, mpg: 20, unit: "gal", cost: 3.75, subheading: "Itemized" },
      { id: "fuelTravel", name: "Travel", type: "fuel", trips: 0, milesPerTrip: 30, mpg: 30, unit: "gal", cost: 3.75 },
      { id: "fuelOil",    name: "Oil",    type: "simple", quantity: 0, unit: "quart", cost: 3 }
    ]
  },
  {
    name: "Heating / Cooling",
    items: [
      { id: "heatingNaturalGas", name: "Natural Gas", type: "simple", quantity: 0, unit: "therm", cost: 0.65 },
      { id: "heatingPropane",    name: "Propane",      type: "simple", quantity: 0, unit: "gal", cost: 4 },
      { id: "heatingOil",        name: "Oil",           type: "simple", quantity: 0, unit: "gal", cost: 3.5 },
      { id: "heatingWood",       name: "Wood",          type: "simple", quantity: 0, unit: "cord", cost: 250 },
      { id: "heatingOther",      name: "Other",         type: "simple", quantity: 0, unit: "?", cost: 0 }
    ]
  },
  {
    name: "Labor",
    items: [
      { id: "laborHours", name: "Hours",                       type: "simple", quantity: 0, unit: "hours", cost: 15 },
      { id: "laborWorkers", name: "Worker(s)",                       type: "simple", quantity: 0, unit: "worker", cost: 0 },
      { id: "laborHealth",   name: "Health Insurance & Retire",   type: "simple", quantity: 0, unit: "payment", cost: 0 },
      { id: "laborFica",     name: "FICA / Workers Comp",     type: "simple", quantity: 0, unit: "payment", cost: 0 },
      { id: "laborOther",    name: "Other",                            type: "simple", quantity: 0, unit: "?", cost: 0 }
    ]
  },
  {
    name: "Materials",
    items: [
      // "linked": quantity/unit follow Product Sales automatically, only name + cost are editable
      { id: "materialsFirst",  name: "First Material",  type: "linked", cost: 0 },
      { id: "materialsSecond", name: "Second Material", type: "linked", cost: 0 },
      { id: "materialsThird",  name: "Third Material",  type: "linked", cost: 0 }
    ]
  },
  {
    name: "Maintenance & Upkeep",
    items: [
      { id: "maintenance", name: "Maintenance & Upkeep", type: "simple", quantity: 1, unit: "year", cost: 0 }
    ]
  },
  {
    name: "Miscellaneous",
    items: [
      { id: "miscConferences", name: "Conferences",           type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "miscDues",        name: "Dues & Fees",           type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "miscLegal",       name: "Legal & Accounting",    type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "miscTravel",      name: "Travel (e.g. Lodging)", type: "simple", quantity: 1, unit: "year", cost: 0 }
    ]
  },
  {
    name: "Production & Distribution",
    items: [
      { id: "pdAdvertising",   name: "Advertising and Marketing", type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "pdContainers",    name: "Containers",                type: "simple", quantity: 0, unit: "container", cost: 0 },
      { id: "pdCustomHire",    name: "Custom Hire",               type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "pdHauling",       name: "Hauling and Trucking",      type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "pdPackaging",     name: "Packaging",                 type: "simple", quantity: 0, unit: "packaging", cost: 0 },
      { id: "pdPhone",         name: "Phone and Internet",        type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "pdRentEquipment", name: "Rent or Lease (Equipment)", type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "pdRentLand",      name: "Rent or Lease (Land)",      type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "pdShipping",      name: "Shipping",                  type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "pdStorage",       name: "Storage & Warehousing",     type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "pdSupplies",      name: "Supplies",                  type: "simple", quantity: 1, unit: "year", cost: 0 }
    ]
  },
  {
    name: "Utilities",
    items: [
      { id: "utilElectricity", name: "Electricity",     type: "simple", quantity: 1, unit: "month", cost: 0 },
      { id: "utilOther",       name: "Other Utilities", type: "simple", quantity: 1, unit: "month", cost: 0 }
    ]
  }
];

// DEPRECIATION CATEGORIES MODEL
const depreciationCategories = [
  {
    name: "Buildings & Structures",
    items: [
      { id: "depProdFacility", name: "Production Facility",   quantity: 1, totalValue: 0, salvagePct: 0.75, usefulLife: 30 },
      { id: "depHouseGarage",  name: "House (Garage)",        quantity: 1, totalValue: 0, salvagePct: 0.75, usefulLife: 30 },
      { id: "depEquipStorage", name: "Equipment Storage(s)",  quantity: 1, totalValue: 0, salvagePct: 0.75, usefulLife: 30 },
      { id: "depStorage",      name: "Storage(s)",            quantity: 1, totalValue: 0, salvagePct: 0.75, usefulLife: 30 },
      { id: "depWorkshop",     name: "Workshop / Repair Shop",quantity: 1, totalValue: 0, salvagePct: 0.75, usefulLife: 30 }
    ]
  },
  {
    name: "Equipment",
    items: [
      { id: "depProdEquip", name: "Production (e.g. Mower)", quantity: 1, totalValue: 0, salvagePct: 0.2, usefulLife: 10 },
      { id: "depTotesLugs", name: "Totes / Lugs",             quantity: 1, totalValue: 0, salvagePct: 0.2, usefulLife: 10 },
      { id: "depEquipStorageItem", name: "Storage",           quantity: 1, totalValue: 0, salvagePct: 0.2, usefulLife: 20 },
      { id: "depEquipOther",       name: "Other",             quantity: 1, totalValue: 0, salvagePct: 0.2, usefulLife: 20 }
    ]
  },
  {
    name: "Miscellaneous",
    items: [
      { id: "depSupplies", name: "Supplies", quantity: 1, totalValue: 0, salvagePct: 0.2, usefulLife: 5 }
    ]
  },
  {
    name: "Repair & Management",
    items: [
      { id: "depTools",    name: "Tools",    quantity: 1, totalValue: 0, salvagePct: 0.2, usefulLife: 30 },
      { id: "depComputer", name: "Computer", quantity: 1, totalValue: 0, salvagePct: 0.2, usefulLife: 5 }
    ]
  },
  {
    name: "Vehicles",
    items: [
      { id: "depTrucks",   name: "Trucks",   quantity: 1, totalValue: 0, salvagePct: 0.2, usefulLife: 10 },
      { id: "depVehicles", name: "Vehicles", quantity: 1, totalValue: 0, salvagePct: 0.2, usefulLife: 5 }
    ]
  }
];

// Land: interest cost on land value (not depreciated)
const landData = { quantity: 1, value: 0, interestRate: 0.05 };

// Simple items — same engine as before, just a new array
const otherFixedCostCategories = [
  {
    name: "Interest on Capital Investments",
    items: [
      { id: "interestCapital", name: "Interest", type: "simple", quantity: 1, unit: "year", cost: 0 }
    ]
  },
  {
    name: "Rent",
    items: [
      { id: "rentProdFacility", name: "Production Facility", type: "simple", quantity: 12, unit: "month", cost: 0 }
    ]
  },
  {
    name: "Insurance",
    items: [
      { id: "insEquipment", name: "Equipment", type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "insLiability", name: "Liability", type: "simple", quantity: 1, unit: "year", cost: 0 },
      { id: "insProperty",  name: "Property",  type: "simple", quantity: 1, unit: "year", cost: 0 }
    ]
  },
  {
    name: "Tax",
    items: [
      { id: "taxEquipment", name: "Equipment", type: "simple", quantity: 1, unit: "year", cost: 0 }
    ]
  }
];

// Property Tax: computed from building values (Depreciation) + land value, divided by $1,000, times mill rate
const propertyTaxData = { millRate: 0 };

// Performance Section Data Models
const laborData = { ownerHours: 2000, familyHours: 0, otherHours: 0 };
const assumedData = { hoursPerMonth: (50 / 12) * 40, monthsPerYear: 12 };

// ===== BUILD VARIABLE COSTS UI (runs once, on page load) =====
function buildVariableCostsUI() {
  const container = document.getElementById("variable-costs-container");
  let html = "";

  variableCostCategories.forEach(category => {
    html += `<details><summary><h3>${category.name}</h3></summary><table>`;
    html += `<tr><th></th><th>Quantity</th><th>Unit</th><th>Cost/unit</th><th>Total Cost</th><th class="varCostPerUnitHeader">$/unit</th><th>% of Var. Costs</th></tr>`;
    category.items.forEach(item => {
      if (item.subheading) {
        html += `<tr><td colspan="7"><strong>${item.subheading}</strong></td></tr>`;
      }
      if (item.type === "fuel") {
        html += `
          <tr>
            <td><input type="text" id="${item.id}-name" value="${item.name}"></td>
            <td>
              Trips: <input type="number" id="${item.id}-trips" value="${item.trips}" class="small-input">
              Miles/trip: <input type="number" id="${item.id}-milesPerTrip" value="${item.milesPerTrip}" class="small-input">
              MPG: <input type="number" id="${item.id}-mpg" value="${item.mpg}" class="small-input">
              <br>= <span id="${item.id}-qtyDisplay">0</span> <span id="${item.id}-qtyUnitDisplay">${item.unit}s</span>
            </td>
            <td><input type="text" id="${item.id}-unit" value="${item.unit}"></td>
            <td><input type="number" id="${item.id}-cost" value="${item.cost}" step="0.01"></td>
            <td>$<span id="${item.id}-totalDisplay">0</span></td>
            <td>$<span id="${item.id}-perUnitDisplay">0</span></td>
            <td><span id="${item.id}-shareDisplay">0</span>%</td>
          </tr>`;
      } else if (item.type === "linked") {
        html += `
          <tr>
            <td><input type="text" id="${item.id}-name" value="${item.name}"></td>
            <td><span id="${item.id}-qtyDisplay">0</span></td>
            <td><span id="${item.id}-unitDisplay">unit</span></td>
            <td><input type="number" id="${item.id}-cost" value="${item.cost}" step="0.01"></td>
            <td>$<span id="${item.id}-totalDisplay">0</span></td>
            <td>$<span id="${item.id}-perUnitDisplay">0</span></td>
            <td><span id="${item.id}-shareDisplay">0</span>%</td>
          </tr>`;
      } else {
        html += `
          <tr>
            <td><input type="text" id="${item.id}-name" value="${item.name}"></td>
            <td><input type="number" id="${item.id}-qty" value="${item.quantity}" step="0.01"></td>
            <td>
              ${
                item.id === "laborHours"
                  ? `<span>${item.unit}</span>`
                  : `<input type="text" id="${item.id}-unit" value="${item.unit}">`
              }
            </td>
            <td><input type="number" id="${item.id}-cost" value="${item.cost}" step="0.01"></td>
            <td>$<span id="${item.id}-totalDisplay">0</span></td>
            <td>$<span id="${item.id}-perUnitDisplay">0</span></td>
            <td><span id="${item.id}-shareDisplay">0</span>%</td>
          </tr>`;
      }
    });
    html += `</table></details>`;
  });

  container.innerHTML = html; // built once here — never called again after this

  // Attach listeners once, after the HTML exists
  variableCostCategories.forEach(category => {
    category.items.forEach(item => {
  if (item.type === "fuel") {
    ["trips", "milesPerTrip", "mpg"].forEach(field => {
      document.getElementById(`${item.id}-${field}`).addEventListener("input", (e) => {
        item[field] = Number(e.target.value);
        calculateAll();
      });
    });
    document.getElementById(`${item.id}-name`).addEventListener("input", (e) => {
      item.name = e.target.value;
    });
    document.getElementById(`${item.id}-unit`).addEventListener("input", (e) => {
      item.unit = e.target.value;
      calculateAll();
    });
  } else if (item.type === "linked") {
    // Materials: only name is editable — quantity/unit are derived, no inputs exist for them
    document.getElementById(`${item.id}-name`).addEventListener("input", (e) => {
      item.name = e.target.value;
    });
  } else {
    // simple type
    document.getElementById(`${item.id}-qty`).addEventListener("input", (e) => {
      item.quantity = Number(e.target.value);
      calculateAll();
    });
    document.getElementById(`${item.id}-name`).addEventListener("input", (e) => {
      item.name = e.target.value;
    });
    const unitInput = document.getElementById(`${item.id}-unit`);

if (unitInput) {
  unitInput.addEventListener("input", (e) => {
    item.unit = e.target.value;
  });
}
  }
  document.getElementById(`${item.id}-cost`).addEventListener("input", (e) => {
    item.cost = Number(e.target.value);
    calculateAll();
  });
});
  });
}


// ===== BUILD DEPRECIATION UI (runs once, on page load) =====
  function buildDepreciationUI() {
  const container = document.getElementById("depreciation-container");
  let html = "";

  depreciationCategories.forEach(category => {
    html += `<details><summary><h4>${category.name}</h4></summary><table>`;
    html += `<tr><th></th><th>Quantity</th><th>Total Value</th><th>Salvage %</th><th>Useful Life (yrs)</th><th>Salvage Value</th><th>Annual Depreciation</th></tr>`;

    category.items.forEach(item => {
      html += `
        <tr>
          <td><input type="text" id="${item.id}-name" value="${item.name}"></td>
          <td><input type="number" id="${item.id}-qty" value="${item.quantity}"></td>
          <td><input type="number" id="${item.id}-totalValue" value="${item.totalValue}" step="0.01"></td>
          <td><input type="number" id="${item.id}-salvagePct" value="${item.salvagePct * 100}" step="0.1"></td>
          <td><input type="number" id="${item.id}-usefulLife" value="${item.usefulLife}" min="1" step="1"></td>
          <td>$<span id="${item.id}-salvageValueDisplay">0</span></td>
          <td>$<span id="${item.id}-depreciationDisplay">0</span></td>
        </tr>`;
    });
    html += `</table></details>`;
  });

  container.innerHTML = html;

  depreciationCategories.forEach(category => {
    category.items.forEach(item => {
      document.getElementById(`${item.id}-name`).addEventListener("input", (e) => {
        item.name = e.target.value;
      });
      document.getElementById(`${item.id}-qty`).addEventListener("input", (e) => {
        item.quantity = Number(e.target.value);
        calculateAll();
      });
      document.getElementById(`${item.id}-totalValue`).addEventListener("input", (e) => {
        item.totalValue = Number(e.target.value);
        calculateAll();
      });
      document.getElementById(`${item.id}-salvagePct`).addEventListener("input", (e) => {
        item.salvagePct = Number(e.target.value) / 100; // stored as decimal, entered as whole %
        calculateAll();
      });
      document.getElementById(`${item.id}-usefulLife`).addEventListener("input", (e) => {
        item.usefulLife = Number(e.target.value);
        calculateAll();
      });
    });
  });
  }

// ===== BUILD FIXED COSTS UI (runs once, on page load) =====
function buildOtherFixedCostsUI() {
  const container = document.getElementById("other-fixed-costs-container");
  let html = "";

  otherFixedCostCategories.forEach(category => {
  html += `<details><summary><h3>${category.name}</h3></summary><table>`;
  html += `<tr><th></th><th>Quantity</th><th>Unit</th><th>Cost/unit</th><th>Total Cost</th></tr>`;
  category.items.forEach(item => {
    html += `
      <tr>
        <td><input type="text" id="${item.id}-name" value="${item.name}"></td>
        <td><input type="number" id="${item.id}-qty" value="${item.quantity}"></td>
        <td><input type="text" id="${item.id}-unit" value="${item.unit}"></td>
        <td><input type="number" id="${item.id}-cost" value="${item.cost}" step="0.01"></td>
        <td>$<span id="${item.id}-totalDisplay">0</span></td>
      </tr>`;
  });

  // Property Tax is a special case: append it as an extra row only inside the "Tax" table
  if (category.name === "Tax") {
  html += `
    <tr>
      <td>Property</td>
      <td><span id="propertyTaxBaseDisplay">0</span></td>
      <td>$1,000 val.</td>
      <td><input type="number" id="millRate" value="0" step="0.001"> (Mill Rate)</td>
      <td>$<span id="propertyTaxDisplay">0</span></td>
    </tr>`;
}

  html += `</table></details>`;
});

  container.innerHTML = html;

  otherFixedCostCategories.forEach(category => {
  category.items.forEach(item => {
    document.getElementById(`${item.id}-name`).addEventListener("input", (e) => {
      item.name = e.target.value;
    });
    document.getElementById(`${item.id}-qty`).addEventListener("input", (e) => {
      item.quantity = Number(e.target.value);
      calculateAll();
    });
    document.getElementById(`${item.id}-unit`).addEventListener("input", (e) => {
      item.unit = e.target.value;
    });
    document.getElementById(`${item.id}-cost`).addEventListener("input", (e) => {
      item.cost = Number(e.target.value);
      calculateAll();
    });
  });

  // Attach the mill rate listener right after building the Tax table's items
  if (category.name === "Tax") {
    document.getElementById("millRate").addEventListener("input", (e) => {
      propertyTaxData.millRate = Number(e.target.value);
      calculateAll();
    });
  }
});
}

// ===== CALCULATION ENGINE =====
function calculateAll() {
  const productQty = revenueData.baseQuantity + (revenueData.baseQuantity * (revenueData.pctChange / 100));
  const productRevenue = productQty * revenueData.productSales.price;

  const otherQty = revenueData.otherSales.quantity;
  const otherRevenue = otherQty * revenueData.otherSales.price;

  const annualRevenue = productRevenue + otherRevenue;
  const totalYield = productQty;

  // --- Variable Costs ---
  let totalVariableCosts = 0;
  variableCostCategories.forEach(category => {
    category.items.forEach(item => {
      if (item.type === "fuel") {
        item.quantity = item.mpg ? (item.trips * item.milesPerTrip) / item.mpg : 0; // guard divide-by-zero
      } else if (item.type === "linked") {
        item.quantity = productQty;              // follows Product Sales quantity
        item.unit = revenueData.baseUnit;         // follows Product Sales unit
      }
      item.totalCost = item.quantity * item.cost;
      totalVariableCosts += item.totalCost;
    });
  });

  // --- Depreciaton ---
  let totalDepreciation = 0;
  depreciationCategories.forEach(category => {
    category.items.forEach(item => {
      item.salvageValue = item.totalValue * item.salvagePct;
      item.annualDepreciation = item.usefulLife
        ? item.quantity * ((item.totalValue - item.salvageValue) / item.usefulLife)
        : 0; // guard divide-by-zero
      totalDepreciation += item.annualDepreciation;
    });
  });

  // --- Land ---
  landData.annualCost = landData.quantity * landData.value * landData.interestRate;

  // --- Other Fixed Costs (Interest, Rent, Insurance, Tax-Equipment) ---
  let totalOtherFixedCosts = 0;
  otherFixedCostCategories.forEach(category => {
    category.items.forEach(item => {
      item.totalCost = item.quantity * item.cost;
      totalOtherFixedCosts += item.totalCost;
    });
  });

  // --- Property Tax (depends on Depreciation's building values + Land) ---
  let totalBuildingValue = 0;
  depreciationCategories[0].items.forEach(item => { // [0] = "Buildings & Structures"
    totalBuildingValue += item.totalValue;
  });
  const propertyTaxBase = (totalBuildingValue + landData.value) / 1000;
  const propertyTaxCost = propertyTaxBase * propertyTaxData.millRate;

  // --- Total Fixed Costs ---
  const totalFixedCosts = totalDepreciation + landData.annualCost + totalOtherFixedCosts + propertyTaxCost;

    // --- Totals ---
  const totalAnnualCost = totalVariableCosts + totalFixedCosts;
  const nfi = annualRevenue - totalAnnualCost;
  const rovc = annualRevenue - totalVariableCosts;

  // --- Breakeven Revenue ---
  const breakevenLongRun = totalAnnualCost;
  const breakevenShortRun = totalVariableCosts;

  // --- Labor Worker Equivalents ---
  // Paid hours pulls live from the Labor category's "Gross Pay" quantity — no separate input needed
  const laborCategory = variableCostCategories.find(c => c.name === "Labor");
  const hoursItem = laborCategory.items.find(i => i.id === "laborHours");
  const paidHours = hoursItem.quantity;

  const ownerWorkers = assumedData.hoursPerMonth ? (laborData.ownerHours / assumedData.hoursPerMonth) / assumedData.monthsPerYear : 0;
  const paidWorkers = assumedData.hoursPerMonth ? (paidHours / assumedData.hoursPerMonth) / assumedData.monthsPerYear : 0;
  const familyWorkers = assumedData.hoursPerMonth ? (laborData.familyHours / assumedData.hoursPerMonth) / assumedData.monthsPerYear : 0;
  const otherWorkers = assumedData.hoursPerMonth ? (laborData.otherHours / assumedData.hoursPerMonth) / assumedData.monthsPerYear : 0;
  const workers = ownerWorkers + paidWorkers + familyWorkers + otherWorkers;

  const totalLaborHours = laborData.ownerHours + paidHours + laborData.familyHours + laborData.otherHours;

  // --- Return to Labor ---
  const returnOwnerLongRun = laborData.ownerHours ? nfi / laborData.ownerHours : 0;
  const returnOwnerShortRun = laborData.ownerHours ? rovc / laborData.ownerHours : 0;
  const returnAllLongRun = totalLaborHours ? nfi / totalLaborHours : 0;
  const returnAllShortRun = totalLaborHours ? rovc / totalLaborHours : 0;

  window.budgetState = { productQty, productRevenue, otherQty, otherRevenue, annualRevenue, totalYield,
    totalVariableCosts, totalDepreciation, totalFixedCosts, propertyTaxBase, propertyTaxCost,
    totalAnnualCost, nfi, rovc, breakevenLongRun, breakevenShortRun,
    paidHours, workers, returnOwnerLongRun, returnOwnerShortRun, returnAllLongRun, returnAllShortRun 
    };

  updateDisplay(); // only touches text/spans, never rebuilds inputs
}

// ===== DISPLAY UPDATES (no innerHTML rebuild — inputs stay untouched) =====
function updateDisplay() {
  const s = window.budgetState;
  document.getElementById("productQtyDisplay").textContent = Math.round(s.productQty);
  document.getElementById("productUnitDisplay").textContent = revenueData.baseUnit;
  document.getElementById("productRevenueDisplay").textContent = s.productRevenue.toFixed(2);
  document.getElementById("otherRevenueDisplay").textContent = s.otherRevenue.toFixed(2);
  document.getElementById("totalRevenue").textContent = s.annualRevenue.toFixed(2);

  // $/unit and Total Yield
  document.getElementById("totalYieldDisplay").textContent = Math.round(s.totalYield);
  document.getElementById("productPerUnitDisplay").textContent =
    s.totalYield ? (s.productRevenue / s.totalYield).toFixed(2) : "0.00";
  document.getElementById("otherPerUnitDisplay").textContent =
    s.totalYield ? (s.otherRevenue / s.totalYield).toFixed(2) : "0.00";

  // dynamic unit labels, tied to whatever the user typed in "Unit"
  document.getElementById("perUnitHeader").textContent = "$/" + revenueData.baseUnit;
  document.getElementById("totalYieldUnitDisplay").textContent = revenueData.baseUnit;

  // variable costs
  document.getElementById("totalVariableCosts").textContent = s.totalVariableCosts.toFixed(2);
  document.querySelectorAll(".varCostPerUnitHeader").forEach(el => {el.textContent = "$/" + revenueData.baseUnit;});

  // Land
  document.getElementById("landCostDisplay").textContent = landData.annualCost.toFixed(2);

  // Property Tax
  document.getElementById("propertyTaxBaseDisplay").textContent = s.propertyTaxBase.toFixed(2);
  document.getElementById("propertyTaxDisplay").textContent = s.propertyTaxCost.toFixed(2);

  // Total Fixed Costs
  document.getElementById("totalFixedCosts").textContent = s.totalFixedCosts.toFixed(2);

  // Variable Costs
  variableCostCategories.forEach(category => {
    category.items.forEach(item => {
      if (item.type === "fuel") {
        document.getElementById(`${item.id}-qtyDisplay`).textContent = item.quantity.toFixed(1);
        document.getElementById(`${item.id}-qtyUnitDisplay`).textContent = item.unit + "s";
      }
      if (item.type === "linked") {
        document.getElementById(`${item.id}-qtyDisplay`).textContent = Math.round(item.quantity);
        document.getElementById(`${item.id}-unitDisplay`).textContent = item.unit;
      }
      document.getElementById(`${item.id}-totalDisplay`).textContent = item.totalCost.toFixed(2);
      document.getElementById(`${item.id}-perUnitDisplay`).textContent =
        s.totalYield ? (item.totalCost / s.totalYield).toFixed(2) : "0.00";
      document.getElementById(`${item.id}-shareDisplay`).textContent =
        s.totalVariableCosts ? ((item.totalCost / s.totalVariableCosts) * 100).toFixed(1) : "0.0";
    });
  });

  // Depreciation
  depreciationCategories.forEach(category => {
    category.items.forEach(item => {
      document.getElementById(`${item.id}-salvageValueDisplay`).textContent = item.salvageValue.toFixed(2);
      document.getElementById(`${item.id}-depreciationDisplay`).textContent = item.annualDepreciation.toFixed(2);
    });
  });

  // Other Fixed Costs
  otherFixedCostCategories.forEach(category => {
    category.items.forEach(item => {
      document.getElementById(`${item.id}-totalDisplay`).textContent = item.totalCost.toFixed(2);
    });
  });

  // Totals
  document.getElementById("totalAnnualCostDisplay").textContent = s.totalAnnualCost.toFixed(2);
  document.getElementById("nfiDisplay").textContent = s.nfi.toFixed(2);
  document.getElementById("rovcDisplay").textContent = s.rovc.toFixed(2);

  // Breakeven Revenue
  document.getElementById("breakevenLongRunDisplay").textContent = s.breakevenLongRun.toFixed(2);
  document.getElementById("breakevenShortRunDisplay").textContent = s.breakevenShortRun.toFixed(2);

  // Labor Hours / Worker Equivalents
  document.getElementById("paidHoursDisplay").textContent = s.paidHours;
  document.getElementById("workersDisplay").textContent = s.workers.toFixed(2);

  // Return to Labor
  document.getElementById("returnOwnerLongRunDisplay").textContent = s.returnOwnerLongRun.toFixed(2);
  document.getElementById("returnOwnerShortRunDisplay").textContent = s.returnOwnerShortRun.toFixed(2);
  document.getElementById("returnAllLongRunDisplay").textContent = s.returnAllLongRun.toFixed(2);
  document.getElementById("returnAllShortRunDisplay").textContent = s.returnAllShortRun.toFixed(2);

}

// ===== EVENT LISTENERS (attached once, on page load) =====
document.getElementById("baseQuantity").addEventListener("input", (e) => {
  revenueData.baseQuantity = Number(e.target.value);
  calculateAll();
});
document.getElementById("baseUnit").addEventListener("input", (e) => {
  revenueData.baseUnit = e.target.value;
  calculateAll();
});
document.getElementById("pctChange").addEventListener("input", (e) => {
  revenueData.pctChange = Number(e.target.value);
  calculateAll();
});
document.getElementById("productPrice").addEventListener("input", (e) => {
  revenueData.productSales.price = Number(e.target.value);
  calculateAll();
});
document.getElementById("otherPrice").addEventListener("input", (e) => {
  revenueData.otherSales.price = Number(e.target.value);
  calculateAll();
});

// allows us to change the revenue names 
  document.getElementById("productSalesName").addEventListener("input", (e) => {
  revenueData.productSales.name = e.target.value;
});
document.getElementById("otherSalesName").addEventListener("input", (e) => {
  revenueData.otherSales.name = e.target.value;
});

// Other Fixed Costs Listener 
document.getElementById("landQty").addEventListener("input", (e) => {
  landData.quantity = Number(e.target.value);
  calculateAll();
});
document.getElementById("landValue").addEventListener("input", (e) => {
  landData.value = Number(e.target.value);
  calculateAll();
});
document.getElementById("landInterestRate").addEventListener("input", (e) => {
  landData.interestRate = Number(e.target.value) / 100; // entered as whole %, stored as decimal
  calculateAll();
});

// Performance Measures Listeners
document.getElementById("ownerHours").addEventListener("input", (e) => {
  laborData.ownerHours = Number(e.target.value);
  calculateAll();
});
document.getElementById("familyHours").addEventListener("input", (e) => {
  laborData.familyHours = Number(e.target.value);
  calculateAll();
});
document.getElementById("otherHours").addEventListener("input", (e) => {
  laborData.otherHours = Number(e.target.value);
  calculateAll();
});
document.getElementById("hoursPerMonth").addEventListener("input", (e) => {
  assumedData.hoursPerMonth = Number(e.target.value);
  calculateAll();
});
document.getElementById("monthsPerYear").addEventListener("input", (e) => {
  assumedData.monthsPerYear = Number(e.target.value);
  calculateAll();
});

// ===== PDF / PRINT =====
document.getElementById("createPdfBtn").addEventListener("click", () => {
  window.print();
});

// Open every collapsed section while printing, then restore what the user had open
window.addEventListener("beforeprint", () => {
  document.querySelectorAll("details").forEach(d => {
    d.dataset.wasOpen = d.open;
    d.open = true;
  });
});
window.addEventListener("afterprint", () => {
  document.querySelectorAll("details").forEach(d => {
    d.open = d.dataset.wasOpen === "true";
  });
});

buildVariableCostsUI();
buildDepreciationUI();
buildOtherFixedCostsUI();
calculateAll();