import { projectPath } from "./ApiPath";
import requester from "./requester";


class ProjectRequester {

    fetchProjectList(keyWord: string = '' ) {
        return requester({
            url: projectPath.GET_ALL_PROJECT,
            method: 'GET',
            data: keyWord
        })
    }

};

const projectRequester = new ProjectRequester();
 
export default projectRequester;