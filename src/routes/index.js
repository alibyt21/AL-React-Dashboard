import menuArray from "src/settings/menu";
import NotFound from "src/views/errors/NotFound";
import PermissionBasedComponent from "src/components/PermissionBasedComponent";

// routes create based on menu.js file
export const createRoutes = (routes) => {
    let newRoutes = [];
    if (Array.isArray(routes)) {
        routes.forEach(function (single) {
            newRoutes.push(
                {
                    path: single.path,
                    element:
                        <PermissionBasedComponent permission={single.permission} isFull={true}>
                            {single.element}
                        </PermissionBasedComponent>,
                    errorElement: <NotFound />,
                    children: createRoutes(single.subs)
                }
            )
        })
    }
    return newRoutes;
}

export const routes = createRoutes(menuArray);
