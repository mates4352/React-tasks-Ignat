import React from 'react'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Pages() {
    return (
        <div>
            {/*RoutesLink выбирает первый подходящий роут*/}
            {/*<RoutesLink>*/}

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*<Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>*/}

                {/*<Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>*/}
                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                {/*<Route path={'/*'} element={<Error404/>}/>*/}

            {/*</RoutesLink>*/}
        </div>
    )
}

export default Pages
