import Teal from '@material-ui/core/colors/teal';
import Purple from '@material-ui/core/colors/purple';
import {createMuiTheme,} from '@material-ui/core'


export const graphQLApi = 'https://grpahql-talmor.herokuapp.com/v1alpha1/graphql'
export const theme = createMuiTheme({
    direction:"rtl",
    palette: {
      primary: Teal,
      secondary: Purple
    },
  })
console.log(theme)
