import workoutImg from "../assets/workout.jpg";
import yogaImg from "../assets/yoga.png";
import cardioImg from "../assets/cardio.png";
import brainImg from "../assets/brain.jpg";

function Suggestion() {
  return (
    <>
      <header>
        <h2>WORKOUT SUGGESTIONS</h2>
        <p>
          The calculator gave you advice to start doing more cardio, yoga or
          weightlifting. This is what to do:
        </p>
      </header>

      <section className="grid-layout">
        <div className="icon-block">
          <img src={workoutImg} alt="Weightlifting icon" />
          <span>Weightlifting</span>
          <ul>
            <li>Try to watch videos on how to do certain exercises</li>
            <li>Focus on form over weight to avoid injuries.</li>
            <li>Try to maximize the amount of weight to lift.</li>
            <li>
              Don’t skip warm-ups and cool-downs – they help prevent soreness
              and injury.
            </li>
            <li>Track your progress to stay motivated.</li>
            <li>Do 6-12 repetitions</li>
          </ul>
        </div>

        <div className="icon-block">
          <img src={yogaImg} alt="Yoga icon" />
          <span>Yoga</span>
          <ul>
            <li>Start with beginner-friendly poses and flows.</li>
            <li>Focus on your breathing to enhance relaxation and control.</li>
            <li>Practice regularly—even short sessions help.</li>
            <li>Use a yoga mat for stability and comfort.</li>
            <li>Incorporate meditation or mindfulness practices.</li>
            <li>
              Stay consistent to see flexibility and stress relief benefits.
            </li>
          </ul>
        </div>

        <div className="icon-block">
          <img src={cardioImg} alt="Cardio icon" />
          <span>Cardio</span>
          <ul>
            <li>
              Choose activities you enjoy like walking, cycling, or dancing.
            </li>
            <li>Start with 20-30 minutes, 3-5 times a week.</li>
            <li>
              Mix steady-state cardio with intervals for variety and results.
            </li>
            <li>Stay hydrated during and after workouts.</li>
            <li>Monitor your heart rate to train safely and effectively.</li>
            <li>Warm up before and cool down after every session.</li>
          </ul>
        </div>

        <div className="icon-block">
          <img src={brainImg} alt="Extra tips icon" />
          <span>Extra Tips</span>
          <ul>
            <li>Sleep daily 8 hours</li>
            <li>Join fitness classes or groups for social support.</li>
            <li>Use fitness apps to track your workouts and nutrition.</li>
            <li>Stay informed about new fitness trends and research.</li>
            <li>Have fun and enjoy the process!</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Suggestion;
