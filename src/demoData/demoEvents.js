const demoEvents = [
    {
        id: 1,
        datetime: {
            year: 2022,
            month: 6,
            day: 22,
            hour: 18,
            minute: 30
        },
        title: 'Youth Board Game Night',
        description: 'Bring a snack and your favorite game. This event is hosted by the youth group, but everyone is invited. Whether your game is checkers, Catan, or Axis & Allies, there\'s something for you'
    },
    {
        id: 2,
        datetime: {
            year: 2022,
            month: 6,
            day: 17,
            hour: 13,
            minute: 0
        },
        title: 'Lunch Potluck',
        description: 'Bring a main dish and a dessert. Crock pots can be left in the learning center. Drinks will be provided. Any help setting up chairs at 12:30 would be much appreciated!'
    },
    {
        id: 3,
        datetime: {
            year: 2022,
            month: 6,
            day: 27,
            hour: 7,
            minute: 0
        },
        title: 'NO WEDNESDAY NIGHT CHURCH',
        description: 'Pastor Frank will be out of town, and there will also be no child care. If you are interested in filling in, please reach out to the main church number. If we are able to find child-care, we will remove this event from the calendar.'
    }
];

export default demoEvents;


// 5 numbers for new Date() specifies year, month(0-indexed), day (not 0-indexed), hour, and minute
// i.e., noon on 6/6/2020 is:
// const someDate = new Date(2020, 5, 6, 12, 0)