/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { commonControllerCall } from "@b2bsample/shared/data-access/data-access-common-api-util";
import { UserList } from "@b2bsample/shared/data-access/data-access-common-models-util";
import { Session } from "next-auth";

/**
 * call GET `getManagementAPIServerBaseUrl()/o/<subOrgId>/scim2/Users` to view all the users
 * 
 * @param session - session object
 * 
 * @returns - list all users
 */
export async function controllerCallViewUsers(session: Session): Promise<UserList | null> {

    const data = (await commonControllerCall("/api/settings/user/viewUsers", session) as UserList | null);

    return data;
}