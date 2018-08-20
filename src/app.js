import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const App = () => 
     (//not called yet
        <Provider store={createStore(reducers)}> 
            <View>
                <Header headerText="tech stack" />
            </View> 
        </Provider>
    );


export default App;
