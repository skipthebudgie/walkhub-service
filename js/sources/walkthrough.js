// Walkhub
// Copyright (C) 2015 Pronovix
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import axios from "axios";
import WalkthroughActions from "actions/walkthrough";

const WalkthroughSource = {
	performList: {
		remote(state) {
			return axios.get("/api/walkthrough");
		},
		local(state) {
			return null; // TODO figure out a smart way to cache this
		},
		shouldFetch() {
			return true;
		},
		loading: WalkthroughActions.loadingWalkthroughs,
		success: WalkthroughActions.receivedWalkthroughs,
		error: WalkthroughActions.fetchingWalkthroughsFailed,
	},
	performLoad: {
		remote(state, uuid) {
			return axios.get(`/api/walkthrough/${uuid}`);
		},
		local(state, uuid) {
			return state.walkthroughs[uuid] ? state.walkthroughs[uuid] : null;
		},
		loading: WalkthroughActions.loadingWalkthrough,
		success: WalkthroughActions.receivedWalkthrough,
		error: WalkthroughActions.fetchingWalkthroughFailed,
	},
	performPost: {
		remote(state, walkthrough) {
			return axios.post("/api/walkthrough", walkthrough);
		},
		local(state) {
			return null;
		},
		shouldFetch() {
			return true;
		},
		loading: WalkthroughActions.creatingWalkthrough,
		success: WalkthroughActions.createdWalkthrough,
		error: WalkthroughActions.creatingWalkthroughFailed,
	},
	performPut: {
		remote(state, walkthrough) {
			return axios.put(`/api/walkthrough/${walkthrough.uuid}`, walkthrough);
		},
		local(state) {
			return null;
		},
		shouldFetch() {
			return true;
		},
		loading: WalkthroughActions.updatingWalkthrough,
		success: WalkthroughActions.updatedWalkthrough,
		error: WalkthroughActions.updatingWalkthroughFailed,
	},
	performDelete: {
		remote(state, uuid) {
			return axios.delete(`/api/walkthrough/${uuid}`);
		},
		local(state) {
			return null;
		},
		shouldFetch() {
			return true;
		},
		loading: WalkthroughActions.deletingWalkthrough,
		success: WalkthroughActions.deletedWalkthrough,
		error: WalkthroughActions.deletingWalkthroughFailed,
	},
};

export default WalkthroughSource;