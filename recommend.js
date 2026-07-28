// Smart meal recommendation engine — no API needed

const MEAL_PLANS = {
  veg: {
    breakfast: [
      { name: "Oats with banana", foods: ["Oats (cooked)", "Banana (medium)"], note: "High fibre, slow energy release." },
      { name: "Idli + Sambar", foods: ["Idli (1 piece)", "Idli (1 piece)", "Idli (1 piece)", "Sambar"], note: "Light, protein-rich South Indian breakfast." },
      { name: "Poha", foods: ["Poha"], note: "Quick, low-calorie and filling." },
      { name: "Upma", foods: ["Upma"], note: "Filling and easy to digest." },
      { name: "Dahi + Banana", foods: ["Dahi (curd)", "Banana (medium)"], note: "Great for gut health." },
    ],
    lunch: [
      { name: "Roti + Dal + Dahi", foods: ["Roti (1 piece)", "Roti (1 piece)", "Dal Tadka", "Dahi (curd)"], note: "Balanced Indian meal with complete protein." },
      { name: "Rajma Chawal", foods: ["Rajma", "Basmati Rice (cooked)"], note: "High protein vegetarian classic." },
      { name: "Chole + Roti", foods: ["Chole (Chana Masala)", "Roti (1 piece)", "Roti (1 piece)"], note: "Iron-rich and very filling." },
      { name: "Palak Paneer + Roti", foods: ["Palak Paneer", "Roti (1 piece)", "Roti (1 piece)"], note: "Packed with iron and calcium." },
      { name: "Khichdi + Dahi", foods: ["Khichdi", "Dahi (curd)"], note: "Easy to digest, great for any goal." },
    ],
    dinner: [
      { name: "Dal + Roti", foods: ["Dal Tadka", "Roti (1 piece)", "Roti (1 piece)"], note: "Light and protein-rich dinner." },
      { name: "Paneer Sabzi + Roti", foods: ["Kadai Paneer", "Roti (1 piece)"], note: "High protein, keep portions moderate." },
      { name: "Khichdi", foods: ["Khichdi"], note: "Light, easy dinner — great for weight loss." },
      { name: "Dosa + Sambar", foods: ["Dosa (plain)", "Sambar"], note: "Light fermented option, good for gut." },
    ],
    snack: [
      { name: "Almonds + Banana", foods: ["Almonds (10 pieces)", "Banana (medium)"], note: "Healthy fats + quick energy." },
      { name: "Dahi", foods: ["Dahi (curd)"], note: "Protein boost between meals." },
      { name: "Fruit bowl", foods: ["Apple (medium)", "Orange (medium)"], note: "Vitamins and natural sugar." },
    ],
  },

  nonveg: {
    breakfast: [
      { name: "Scrambled Eggs + Brown Bread", foods: ["Scrambled Eggs (2 eggs)", "Brown Bread (1 slice)", "Brown Bread (1 slice)"], note: "High protein start to the day." },
      { name: "Boiled Eggs + Banana", foods: ["Boiled Egg (1 large)", "Boiled Egg (1 large)", "Banana (medium)"], note: "Quick, filling and protein-rich." },
      { name: "Egg Bhurji + Roti", foods: ["Egg Bhurji (2 eggs)", "Roti (1 piece)"], note: "Classic high-protein Indian breakfast." },
      { name: "Oats + Boiled Egg", foods: ["Oats (cooked)", "Boiled Egg (1 large)"], note: "Fibre + protein combo." },
    ],
    lunch: [
      { name: "Chicken Rice Bowl", foods: ["Chicken Breast (grilled)", "Basmati Rice (cooked)", "Salad (green, plain)"], note: "Lean protein with complex carbs." },
      { name: "Chicken Curry + Roti", foods: ["Chicken Curry", "Roti (1 piece)", "Roti (1 piece)"], note: "Classic high-protein Indian lunch." },
      { name: "Fish Curry + Rice", foods: ["Fish Curry", "Basmati Rice (cooked)"], note: "Omega-3 rich and light." },
      { name: "Chicken Biryani", foods: ["Chicken Biryani"], note: "Full meal — watch the portion." },
      { name: "Rajma + Chicken", foods: ["Rajma", "Chicken Breast (grilled)"], note: "Double protein power." },
    ],
    dinner: [
      { name: "Grilled Chicken + Salad", foods: ["Chicken Breast (grilled)", "Salad (green, plain)"], note: "Light, high-protein dinner — ideal for fat loss." },
      { name: "Fish Curry + Roti", foods: ["Fish Curry", "Roti (1 piece)"], note: "Light and omega-3 packed." },
      { name: "Dal + Egg Bhurji + Roti", foods: ["Dal Tadka", "Egg Bhurji (2 eggs)", "Roti (1 piece)"], note: "Balanced dinner with double protein." },
      { name: "Mutton Curry + Rice", foods: ["Mutton Curry", "Basmati Rice (cooked)"], note: "Iron-rich — keep portions moderate." },
    ],
    snack: [
      { name: "Boiled Eggs", foods: ["Boiled Egg (1 large)", "Boiled Egg (1 large)"], note: "Best protein snack." },
      { name: "Tuna on Brown Bread", foods: ["Tuna (canned in water)", "Brown Bread (1 slice)"], note: "High protein, low fat." },
      { name: "Almonds + Banana", foods: ["Almonds (10 pieces)", "Banana (medium)"], note: "Healthy fats + energy." },
    ],
  },

  vegan: {
    breakfast: [
      { name: "Oats + Banana", foods: ["Oats (cooked)", "Banana (medium)"], note: "Plant-based energy to start the day." },
      { name: "Poha", foods: ["Poha"], note: "Light and iron-rich." },
      { name: "Upma", foods: ["Upma"], note: "Filling South Indian breakfast." },
      { name: "Fruit bowl", foods: ["Apple (medium)", "Banana (medium)", "Orange (medium)"], note: "Vitamins and antioxidants." },
    ],
    lunch: [
      { name: "Rajma Chawal", foods: ["Rajma", "Basmati Rice (cooked)"], note: "Complete plant protein." },
      { name: "Chole + Roti", foods: ["Chole (Chana Masala)", "Roti (1 piece)", "Roti (1 piece)"], note: "Iron and protein powerhouse." },
      { name: "Dal + Rice", foods: ["Dal Tadka", "Basmati Rice (cooked)"], note: "Classic complete amino acid combo." },
      { name: "Khichdi", foods: ["Khichdi"], note: "Gentle on digestion, nutritionally balanced." },
    ],
    dinner: [
      { name: "Dal + Roti", foods: ["Dal Tadka", "Roti (1 piece)", "Roti (1 piece)"], note: "Light and protein-rich plant dinner." },
      { name: "Dosa + Sambar", foods: ["Dosa (plain)", "Sambar"], note: "Fermented, great for gut health." },
      { name: "Khichdi", foods: ["Khichdi"], note: "Easy to digest evening meal." },
    ],
    snack: [
      { name: "Almonds", foods: ["Almonds (10 pieces)"], note: "Healthy fats and protein." },
      { name: "Banana + Peanut Butter", foods: ["Banana (medium)", "Peanut Butter (1 tbsp)"], note: "Energy + protein combo." },
      { name: "Fruit bowl", foods: ["Apple (medium)", "Orange (medium)"], note: "Natural vitamins and fibre." },
    ],
  },

  eggetarian: {
    breakfast: [
      { name: "Scrambled Eggs + Toast", foods: ["Scrambled Eggs (2 eggs)", "Brown Bread (1 slice)", "Brown Bread (1 slice)"], note: "High protein start." },
      { name: "Boiled Eggs + Oats", foods: ["Boiled Egg (1 large)", "Boiled Egg (1 large)", "Oats (cooked)"], note: "Sustained energy + protein." },
      { name: "Egg Bhurji + Roti", foods: ["Egg Bhurji (2 eggs)", "Roti (1 piece)"], note: "Protein-rich Indian breakfast." },
      { name: "Idli + Boiled Egg", foods: ["Idli (1 piece)", "Idli (1 piece)", "Boiled Egg (1 large)"], note: "Light carbs + protein." },
    ],
    lunch: [
      { name: "Egg Curry + Rice", foods: ["Basmati Rice (cooked)", "Dal Tadka"], note: "Protein-packed lunch." },
      { name: "Rajma + Boiled Eggs", foods: ["Rajma", "Boiled Egg (1 large)"], note: "Double protein." },
      { name: "Palak Paneer + Roti + Egg", foods: ["Palak Paneer", "Roti (1 piece)", "Boiled Egg (1 large)"], note: "Iron, calcium and protein." },
      { name: "Chole + Egg Bhurji + Roti", foods: ["Chole (Chana Masala)", "Egg Bhurji (2 eggs)", "Roti (1 piece)"], note: "Power lunch." },
    ],
    dinner: [
      { name: "Dal + Egg Bhurji + Roti", foods: ["Dal Tadka", "Egg Bhurji (2 eggs)", "Roti (1 piece)"], note: "Balanced, light dinner." },
      { name: "Dosa + Sambar + Egg", foods: ["Dosa (plain)", "Sambar", "Boiled Egg (1 large)"], note: "Light and nutritious." },
      { name: "Khichdi + Boiled Egg", foods: ["Khichdi", "Boiled Egg (1 large)"], note: "Comfort food with extra protein." },
    ],
    snack: [
      { name: "Boiled Eggs", foods: ["Boiled Egg (1 large)", "Boiled Egg (1 large)"], note: "Best protein snack." },
      { name: "Dahi + Banana", foods: ["Dahi (curd)", "Banana (medium)"], note: "Probiotic + energy." },
      { name: "Almonds + Banana", foods: ["Almonds (10 pieces)", "Banana (medium)"], note: "Healthy fats + natural sugar." },
    ],
  },
};

function getMealType() {
  const h = new Date().getHours();
  if (h >= 6 && h < 11) return 'breakfast';
  if (h >= 11 && h < 16) return 'lunch';
  if (h >= 16 && h < 19) return 'snack';
  return 'dinner';
}

function getFoodCalories(name) {
  if (typeof FOODS === 'undefined') return 0;
  const f = FOODS.find(f => f.name === name);
  return f ? f.cal : 0;
}

function getRecommendation(profile, remainingCal, mealType) {
  const diet = profile.diet || 'veg';
  const goal = profile.goal || 'maintain';
  const plans = MEAL_PLANS[diet] || MEAL_PLANS.veg;
  const options = plans[mealType] || plans.lunch;

  // Score each option by how well it fits remaining calories
  const scored = options.map(opt => {
    const totalCal = opt.foods.reduce((sum, f) => sum + getFoodCalories(f), 0);
    const diff = Math.abs(totalCal - remainingCal * 0.4); // aim for ~40% of remaining
    return { ...opt, totalCal, score: diff };
  });

  scored.sort((a, b) => a.score - b.score);

  // Pick randomly from top 2 so it doesn't always show the same one
  const pick = scored[Math.floor(Math.random() * Math.min(2, scored.length))];

  // Goal-based tip
  const goalTip = goal === 'lose'
    ? 'Keep portions moderate and avoid adding extra oil or ghee.'
    : goal === 'gain'
    ? 'Add an extra roti or a handful of nuts to boost your intake.'
    : 'This keeps you right at your maintenance target.';

  return { ...pick, goalTip };
}
