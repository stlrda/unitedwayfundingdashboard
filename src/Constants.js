export const dashboardNames = {
  'Awards By County': 'Awards By County',
  'Impact Area By County': 'Impact Area By County',
  'Individual Awards By County/Zipcode': 'Individual Awards By County/Zipcode',
  'Individual Awards By Recipient Org.': 'Individual Awards By Recipient Org.',
  'Awards Per Topic': 'Awards Per Topic',
  'Individual Awards By Topic': 'Individual Awards By Topic',
  'Funding Organizations': 'Funding Organizations',
}


export const urls = {
  'Awards By County': "https://public.tableau.com/views/RDA-UnitedWayRegionalFundingTrends/12-UI?:display_count=y&:origin=viz_share_link",
  'Impact Area By County': "https://public.tableau.com/views/RDA-UnitedWayRegionalFundingTrends/22-UI?:display_count=y&:origin=viz_share_link",
  'Individual Awards By County/Zipcode': "https://public.tableau.com/views/RDA-UnitedWayRegionalFundingTrends/32-UI?:display_count=y&:origin=viz_share_link",
  'Individual Awards By Recipient Org.': "https://public.tableau.com/views/RDA-UnitedWayRegionalFundingTrends/53-UI?:display_count=y&:origin=viz_share_link",
  'Awards Per Topic': "https://public.tableau.com/views/RDA-UnitedWayRegionalFundingTrends/62-UI?:display_count=y&:origin=viz_share_link",
  'Individual Awards By Topic': "https://public.tableau.com/views/RDA-UnitedWayRegionalFundingTrends/72-UI?:display_count=y&:origin=viz_share_link",
  'Funding Organizations': "https://public.tableau.com/views/RDA-UnitedWayRegionalFundingTrends/82-UI?:display_count=y&:origin=viz_share_link",
}

export const descriptions = {
  'Awards By County': 'This page provides an overall summary of funding for the entire St. Louis Region made up of 16 counties.  You can see the total number of awards for the region along with the total amount.  This view also compares the 16 different counties in Illinois and Missouri based on the amount of funding each received.  Hovering over a county on the map allows you see the name, the number of awards and amount given for each county.',
  'Impact Area By County': 'On this page we can filter by the county receiving awards and take a closer look at each, and see what impact areas are being funded for that specific county.  You can see the total amount of funding provided for each county and how many awards it received, along with how the funding was distributed among the different impact areas.',
  'Where The Funding Went': 'This page takes a deeper dive into the counties and allows us to take a look at each zip code within it and see the specific awards given.  For the county and zip code you choose to filter on you can see the receiving organization, impact area, topic, and the award amount for each individual award.  Hovering over the award amount on the table will provide a little information about what the organization does with the money provided.',
  'Individual Awards By Recipient Org.': 'On this page we can select which recipient organization we would like to see funding data for.  It provides us with the total amount and number of awards received, the county and zip code the organization resides.  The table presents to us the impact area, topic, funding organization, and award amount for each individual award granted to the organization.  Hovering over the dollar amount on the table will provide you with a tooltip that tells a little more information about what the funds were used for.',
  'Awards Per Topic': 'This page allows us to see how funds are distributed amongst the impact areas.  Within each impact area are topics, and we can see how the money is distributed out to each within each impact area.  ',
  'Individual Awards By Topic': 'Here we can see the impact area, topic, recipient and funding organizations, and dollar amount for each individual award.  We can filter out the results by impact area, topic, and dollar amount.  Each impact area has a subset of topics that are specific to that area.  ',
  'Funding Organizations': 'This page allows us to explore the different funding organizations.  We can filter the table by funding type, impact area, topic, or a combination of all 3.  We can see the name of the funding organization and dollar amount for each individual award that fits the criteria you set.  Hovering over the dollar amount in the table will provide you with more detail about what the funds were used for.',
}

export const tips = {
  'Awards By County': [
    'Hover over each county on the map to see more information',
    'If you want a copy of the data, click the download icon in the lower right corner of the dashboard',
    'If you want to download the data for a specific county, click on the county and select "Keep Only" then use the second step to download the data'
  ],
  'Impact Area By County': [
    'Choose a recipient county from the dropdown to learn more specific information about that county',
    'Click on a specific bar on a page to apply a filter to only see that impact area information for the rest of the counties',
    'The top row will populate automatically for each selected county with summary information'
  ],
  'Individual Awards By County/Zipcode': [
    'To get started, select a county and zip code to filter the data down to a specific area',
    'If you would like to change the order of the data, to the left of the Row ID column, you can adjust the order to be alphabetical or numerical based on award amount'
  ],
  'Individual Awards By Recipient Org.': [
    'To get started, scroll through all of the funding organizations',
    'For a more in depth view, click the dropdown at the top and either select an organization from the list or start typing to find a particular one you are looking for',
    'Try reordering the data with the buttons next to each data field header'
  ],
  'Awards Per Topic': [
    'Use the dropdown to select a specific impact area',
    'Selecting a specific impact area allows you to see how the funding is distributed amongst the various topics'
  ],
  'Individual Awards By Topic': [
    'Select an impact area and a topic to see the individual awards that have been funded',
    'Hover over an award amount to see additional notes left by the funders',
    'Using the sliding scale in the upper right section of the table to filter by award amounts'
  ],
  'Funding Organizations': [
    'Get a better look at what organizations have been funding what, by selecting the organization you are looking for from the dropdown',
    'Select the impact area and/or topic from the dropdown to see which organizations are funding that area'
  ],
}

const tip1 = 'Once you have navigated around the dashboard, select the data you would like to download by using the filtering methods outlined above'
const tip2 = 'After filtering, select the box with the arrow pointing down in the lower right hand corner of the dashboard'
const tip3 = 'Select "Data" from the pop up and another pop up will appear with directions how to download'
const tip4 = 'To download the full data set, click on one of the summary fields and follow the same directions from step 2 on'

export const downloadTips = {
  'Awards By County': [tip1, tip2, tip3, tip4],
  'Impact Area By County': [tip1, tip2, tip3, tip4],
  'Individual Awards By County/Zipcode': [tip1, tip2, tip3, tip4],
  'Individual Awards By Recipient Org.': [tip1, tip2, tip3, tip4],
  'Awards Per Topic': [tip1, tip2, tip3, tip4],
  'Individual Awards By Topic': [tip1, tip2, tip3, tip4],
  'Funding Organizations': [tip1, tip2, tip3, tip4],
}






