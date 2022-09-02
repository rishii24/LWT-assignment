import { createSlice } from "@reduxjs/toolkit";

// const onClickAddTimeline = () => {
//     if (saveStatus) {
//         let tempData = timelines[edit]
//         if (tempData.id) return dispatch(patchTimeline(id, tempData.id, tempData.aim, tempData.status))
//         dispatch(postTimeline(id, tempData.aim, tempData.status))
//         return setSaveStatus(false) 
//     }
//     setTimelines([...timelines, { aim: "", status: "Pending" }]);
// };

// const handleDelete = (index) => {
//     if (timelines.length === 1) {
//         return setTimelines([{ aim: "", status: "Pending" }]);
//     }
//     if (window.confirm("Do you want to delete?")) {
//         let timelineId = timelines[index].id
//         if (timelineId) { ApiService.delete(`${timeline.DELETE}${id}`, { data: { timeline_id: timelineId } }) }
//         setTimelines(timelines.filter((e, idx) => idx !== index));
//         dispatch(getTimelines(id))
//         return
//     }
// };