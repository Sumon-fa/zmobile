import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SubscriptionList from './src/components/SubscriptionList';

const App = () => {
  const [subscriptions, setSubscription] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSubscriptionHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://qwkm4rryjb.execute-api.eu-north-1.amazonaws.com/prod/subscriptions',
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      setSubscription(data);
    } catch (error: any) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSubscriptionHandler();
  }, [fetchSubscriptionHandler]);

  return (
    <SafeAreaView style={styles.container}>
      <SubscriptionList subscriptions={subscriptions} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
