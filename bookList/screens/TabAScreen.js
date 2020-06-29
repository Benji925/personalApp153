
export default function TabAScreen() {
    return (
        <Stack.Navigator
            screenOptions={{headerStyle: { backgroundColor: 'transparent', },
                headerBackground: MyCustomHeaderBackImage   ,
            }}>
            <Stack.Screen
                name="Contacts"
                component={ContactsScreen}
                options={{
                    headerTitleStyle: { flex: 1, textAlign: 'center' },
                }}
            />
            <Stack.Screen
                name="New Contact"
                component={NewContact}
                options={{
                    headerTitleStyle: { flex: 1, textAlign: 'center' },
                }}
            />
            <Stack.Screen
                name="Contact Details"
                component={ContactDetails}
                options={{
                    headerTitleStyle: { flex: 1, textAlign: 'center' },
                }}
            />
        </Stack.Navigator>
    );
}