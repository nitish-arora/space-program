import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function spaceLaunchReducer(
  state = initialState.launches,
  action
) {
  switch (action.type) {
    case types.SPACE_LAUNCES:
      return action.payload.map((launch) => {
        const cores = launch.rocket.first_stage.cores;
        const land_success = cores.every((core) => core.land_success === null)
          ? "-"
          : cores.map((core) => core.land_success).join(", ");
        return {
          img: launch.links.mission_patch_small,
          mission_name: launch.mission_name,
          mission_id: launch.mission_id,
          launch_year: launch.launch_year,
          launch_success:
            launch.launch_success === null
              ? "-"
              : launch.launch_success.toString(),
          flight_number: launch.flight_number,
          landing_success: land_success
        };
      });
    default:
      return state;
  }
}
