import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function spaceLaunchReducer(
  state = initialState.launches,
  action
) {
  switch (action.type) {
    case types.SPACE_LAUNCES:
      return action.payload.map((launch) => {
        const land_success = launch.rocket.first_stage.cores[0].land_success;
        return {
          img: launch.links.mission_patch_small,
          mission_name: launch.mission_name,
          mission_id: launch.mission_id,
          launch_year: launch.launch_year,
          launch_success: launch.launch_success.toString(),
          flight_number: launch.flight_number,
          landing_success: land_success === null ? "-" : land_success.toString()
        };
      });
    default:
      return state;
  }
}
