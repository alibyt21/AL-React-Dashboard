import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { homeURL } from 'src/settings/config';
import menuArray from 'src/settings/menu';

export default function Breadcrumb() {
    let location = useLocation();
    let path = location.pathname

    function findPathToObject(menuArray, url, path = []) {
        for (let i = 0; i < menuArray.length; i++) {
            if (menuArray[i].path === url) {
                // Found the target object, return the path
                return [...path, i];
            }

            // Recursively search in subs if present
            if (menuArray[i].subs) {
                const result = findPathToObject(menuArray[i].subs, url, [...path, i]);
                if (result) {
                    return result;
                }
            }
        }

        // Return null if the target object is not found
        return null;
    }

    function getBreadcrumbs(object, index) {
        let titles = [];
        get(object, index);
        function get(object, index) {
            if (index.length > 0) {
                if (!(object == menuArray && menuArray[index[0]].subs.length > 0)) {
                    titles.push({ label: object[index[0]].label, path: object[index[0]].path });
                }
                let newObject = object[index[0]].subs;
                index.shift();
                return get(newObject, index);
            } else {
                return;
            }
        }
        return titles;
    }

    return (
        <ol className="flex text-gray-500 dark:text-gray-300  text-sm">
            <li className="breadcrumb-item hover:text-primary-color  transition-all ease-in-out duration-200">
                <Link to={homeURL}>خانه</Link>
            </li>
            {
                getBreadcrumbs(menuArray, findPathToObject(menuArray, path)).map(function (single) {
                    return (
                        <li className="breadcrumb-item hover:text-primary-color transition-all ease-in-out duration-200">
                            {
                                path == single.path
                                    ?
                                    <span className='text-primary-color'>{single.label}</span>
                                    :
                                    <Link to={single.path}>{single.label}</Link>
                            }
                        </li>
                    )
                })
            }
        </ol>
    );
}