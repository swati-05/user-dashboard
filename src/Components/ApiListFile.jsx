// This component is used to store all the api which will be used through out the project

import BackendUrl from "./BackendUrl"

export default function ApiListFile() {

    let baseUrl = BackendUrl;
    let apiList = {
        API_GETUSER: `${baseUrl}/users`
    }

    return apiList
}