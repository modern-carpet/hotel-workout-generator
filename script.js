// Exercise database
// Enhanced Exercise Database
const exerciseDatabase = {
    exercises: [
        {
            name: "Bodyweight Squat",
            type: "compound",
            primaryMuscles: ["quadriceps", "glutes"],
            secondaryMuscles: ["hamstrings", "calves"],
            equipment: "bodyweight",
            difficulty: 1,
            instructions: "Stand with feet shoulder-width apart. Lower your body as if sitting back into a chair. Keep your chest up and weight in your heels. Push through your heels to stand back up.",
            videoLink: "https://example.com/bodyweight-squat-tutorial",
            variations: ["Jump Squat", "Squat Hold"],
            progressions: ["Goblet Squat", "Barbell Back Squat"],
            regressions: ["Wall Squat", "Assisted Squat"]
        },
        {
            name: "Push-up",
            type: "compound",
            primaryMuscles: ["chest", "triceps"],
            secondaryMuscles: ["shoulders", "core"],
            equipment: "bodyweight",
            difficulty: 2,
            instructions: "Start in a plank position with hands slightly wider than shoulder-width. Lower your body until your chest nearly touches the floor. Push your body up to the starting position.",
            videoLink: "https://example.com/push-up-tutorial",
            variations: ["Wide Push-up", "Diamond Push-up"],
            progressions: ["Decline Push-up", "Plyometric Push-up"],
            regressions: ["Knee Push-up", "Incline Push-up"]
        },
        {
            name: "Plank",
            type: "isometric",
            primaryMuscles: ["core"],
            secondaryMuscles: ["shoulders", "back"],
            equipment: "bodyweight",
            difficulty: 2,
            instructions: "Start in a push-up position with forearms on the ground. Keep your body in a straight line from head to heels. Hold this position.",
            videoLink: "https://example.com/plank-tutorial",
            variations: ["Side Plank", "Plank with Leg Lift"],
            progressions: ["Plank with Shoulder Taps", "Plank to Downward Dog"],
            regressions: ["Knee Plank", "Wall Plank"]
        },
        {
            name: "Dumbbell Rows",
            type: "compound",
            primaryMuscles: ["back", "biceps"],
            secondaryMuscles: ["shoulders", "core"],
            equipment: "dumbbells",
            difficulty: 2,
            instructions: "Bend at the hips with a dumbbell in each hand. Pull the dumbbells up to your sides, squeezing your shoulder blades together. Lower back down with control.",
            videoLink: "https://example.com/dumbbell-row-tutorial",
            variations: ["Single-Arm Dumbbell Row", "Bent-Over Row"],
            progressions: ["Barbell Rows", "Weighted Pull-ups"],
            regressions: ["Inverted Rows", "Resistance Band Rows"]
        },
        {
            name: "Lunges",
            type: "compound",
            primaryMuscles: ["quadriceps", "glutes"],
            secondaryMuscles: ["hamstrings", "calves"],
            equipment: "bodyweight",
            difficulty: 2,
            instructions: "Step forward with one leg, lowering your hips until both knees are bent at about 90 degrees. Push back to the starting position and repeat with the other leg.",
            videoLink: "https://example.com/lunge-tutorial",
            variations: ["Reverse Lunges", "Walking Lunges"],
            progressions: ["Weighted Lunges", "Bulgarian Split Squats"],
            regressions: ["Assisted Lunges", "Half Lunges"]
        },
        {
            name: "Bicycle Crunches",
            type: "isolation",
            primaryMuscles: ["core"],
            secondaryMuscles: ["hip flexors"],
            equipment: "bodyweight",
            difficulty: 2,
            instructions: "Lie on your back with hands behind your head. Lift shoulders off the ground and bring one knee towards your chest while extending the other leg. Rotate your torso to bring the opposite elbow towards the bent knee. Alternate sides in a pedaling motion.",
            videoLink: "https://example.com/bicycle-crunch-tutorial",
            variations: ["Russian Twists", "Mountain Climbers"],
            progressions: ["Hanging Leg Raises", "Dragon Flags"],
            regressions: ["Dead Bug", "Seated Bicycle Crunches"]
        },
        {
            name: "Dumbbell Shoulder Press",
            type: "compound",
            primaryMuscles: ["shoulders"],
            secondaryMuscles: ["triceps", "upper chest"],
            equipment: "dumbbells",
            difficulty: 3,
            instructions: "Stand with feet shoulder-width apart, holding dumbbells at shoulder height. Press the dumbbells overhead until your arms are fully extended. Lower back to the starting position with control.",
            videoLink: "https://example.com/dumbbell-shoulder-press-tutorial",
            variations: ["Arnold Press", "Single-Arm Shoulder Press"],
            progressions: ["Barbell Overhead Press", "Push Press"],
            regressions: ["Seated Dumbbell Press", "Resistance Band Shoulder Press"]
        }
        // Add more exercises here...
    ],
    
    // Workout templates based on goals and fitness levels
    workoutTemplates: {
        beginner: {
            weightloss: {
                warmup: ["Light Cardio", "Dynamic Stretching"],
                mainWorkout: [
                    { type: "compound", count: 3 },
                    { type: "isolation", count: 2 },
                    { type: "cardio", count: 1 }
                ],
                cooldown: ["Light Cardio", "Static Stretching"]
            },
            strength: {
                warmup: ["Light Cardio", "Dynamic Stretching"],
                mainWorkout: [
                    { type: "compound", count: 4 },
                    { type: "isolation", count: 2 }
                ],
                cooldown: ["Static Stretching"]
            },
            // Add more goals...
        },
        // Add more fitness levels...
    }
};

// Workout Generation Function
function generateWorkout(userPreferences) {
    console.log("Generating workout with preferences:", userPreferences);
    
    const { time, equipment, intensity, goal, fitnessLevel, focus } = userPreferences;
    
    // Select appropriate workout template
    const template = exerciseDatabase.workoutTemplates[fitnessLevel]?.[goal];
    if (!template) {
        console.error("No template found for", fitnessLevel, goal);
        return null;
    }
    
    // Generate workout based on template
    const workout = {
        warmup: template.warmup,
        exercises: [],
        cooldown: template.cooldown
    };
    
    // Filter exercises based on equipment and focus
    const availableExercises = exerciseDatabase.exercises.filter(exercise => 
        equipment.includes(exercise.equipment) &&
        (focus === "total" || exercise.primaryMuscles.includes(focus))
    );
    
    // Select exercises based on template
    template.mainWorkout.forEach(item => {
        const exercisesOfType = availableExercises.filter(e => e.type === item.type);
        for (let i = 0; i < item.count; i++) {
            if (exercisesOfType.length > 0) {
                const randomExercise = exercisesOfType[Math.floor(Math.random() * exercisesOfType.length)];
                workout.exercises.push(randomExercise);
            }
        }
    });
    
    // Adjust workout based on available time
    const totalExercises = Math.floor(time / 5); // Assuming 5 minutes per exercise
    workout.exercises = workout.exercises.slice(0, totalExercises);
    
    // Adjust reps and sets based on intensity and fitness level
    workout.exercises = workout.exercises.map(exercise => {
        const baseReps = fitnessLevel === 'beginner' ? 8 : fitnessLevel === 'intermediate' ? 10 : 12;
        const baseSets = fitnessLevel === 'beginner' ? 2 : fitnessLevel === 'intermediate' ? 3 : 4;
        return {
            ...exercise,
            sets: baseSets,
            reps: baseReps + (parseInt(intensity) - 3) * 2 // Adjust reps based on intensity
        };
    });
    
    console.log("Workout generated:", workout);
    return workout;
}

// Function to provide weight recommendations
function recommendWeight(exercise, fitnessLevel, gender) {
    const baseWeight = {
        beginner: { male: 10, female: 5 },
        intermediate: { male: 20, female: 10 },
        advanced: { male: 30, female: 15 }
    };
    
    return `Start with ${baseWeight[fitnessLevel][gender]} lbs. This should feel challenging but manageable for the prescribed reps. Adjust as needed.`;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('workoutForm');
    const workoutPlan = document.getElementById('workoutPlan');
    const modal = document.getElementById('exerciseModal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log("Form submitted");
        
        const userPreferences = {
            time: document.getElementById('time').value,
            equipment: Array.from(document.getElementById('equipment').selectedOptions).map(option => option.value),
            intensity: document.getElementById('intensity').value,
            goal: document.getElementById('goal').value,
            fitnessLevel: document.getElementById('fitnessLevel').value,
            focus: document.getElementById('focus').value,
            gender: document.getElementById('gender').value
        };
        
        console.log("User preferences:", userPreferences);

        const workout = generateWorkout(userPreferences);
        console.log("Generated workout:", workout);
        
        if (workout) {
            displayWorkout(workout, userPreferences);
        } else {
            console.error("Workout generation failed");
            workoutPlan.innerHTML = "<p>Sorry, we couldn't generate a workout. Please try different options.</p>";
        }
    });

    const timeSlider = document.getElementById('time');
    const timeValue = document.getElementById('timeValue');

    function updateTimeValue() {
    timeValue.textContent = `${timeSlider.value} minutes`;
}

timeSlider.addEventListener('input', updateTimeValue);
updateTimeValue(); // Set initial value

    const intensitySlider = document.getElementById('intensity');
    const intensityValue = document.getElementById('intensityValue') || document.createElement('div');
    intensityValue.id = 'intensityValue';
    if (!document.getElementById('intensityValue')) {
        intensitySlider.parentNode.insertBefore(intensityValue, intensitySlider.nextSibling);
    }

    function updateIntensityValue() {
        const value = intensitySlider.value;
        const labels = ['Easy', 'Moderate', 'Challenging', 'Hard', 'Intense'];
        intensityValue.textContent = labels[value - 1];
    }

    intensitySlider.addEventListener('input', updateIntensityValue);
    updateIntensityValue(); // Set initial value

    function displayWorkout(workout, userPreferences) {
        let html = '<h2>Your Custom Workout</h2>';
        
        html += '<h3>Warm-up:</h3><ul>';
        workout.warmup.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';

        html += '<h3>Main Exercises:</h3><ul class="exercise-list">';
        workout.exercises.forEach((exercise, index) => {
            html += `
                <li class="exercise-item" data-index="${index}">
                    <span class="exercise-name">${exercise.name}</span>
                    <span class="exercise-details">${exercise.sets} sets of ${exercise.reps} reps</span>
                </li>`;
        });
        html += '</ul>';

        html += '<h3>Cool-down:</h3><ul>';
        workout.cooldown.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';

        html += '<button id="refreshWorkout">Refresh Workout</button>';

        workoutPlan.innerHTML = html;

        document.getElementById('refreshWorkout').addEventListener('click', function() {
            form.dispatchEvent(new Event('submit'));
        });

        // Add click event listeners to exercise items
        document.querySelectorAll('.exercise-item').forEach(item => {
            item.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                showExerciseDetails(workout.exercises[index], userPreferences);
            });
        });
    }

    function showExerciseDetails(exercise, userPreferences) {
        const weightRecommendation = recommendWeight(exercise, userPreferences.fitnessLevel, userPreferences.gender);
        
        let modalHtml = `
            <h2>${exercise.name}</h2>
            <p><strong>Instructions:</strong> ${exercise.instructions}</p>
            <p><strong>Primary Muscles:</strong> ${exercise.primaryMuscles.join(', ')}</p>
            <p><strong>Secondary Muscles:</strong> ${exercise.secondaryMuscles.join(', ')}</p>
            <p><strong>Equipment:</strong> ${exercise.equipment}</p>
            <p><strong>Difficulty:</strong> ${exercise.difficulty}/5</p>
            <p><strong>Weight Recommendation:</strong> ${weightRecommendation}</p>
            <p><strong>Video Tutorial:</strong> <a href="${exercise.videoLink}" target="_blank">Watch here</a></p>
        `;

        modalContent.innerHTML = modalHtml;
        modal.style.display = "block";
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
