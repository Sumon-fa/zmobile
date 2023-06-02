import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

interface SubscriptionProps {
  plan: string
  monthlyCost: number
  dataLimit: string
  minutesLimit: number
  messagesLimit: number
  id: string
}

interface SubscriptionListProps {
  subscriptions: SubscriptionProps[]
}

const SubscriptionList = ({ subscriptions }: SubscriptionListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Subscriptions</Text>
      </View>
      <View style={styles.cardContainer}>
        {subscriptions.map((subscription) => (
          <View key={subscription.id} style={styles.card}>
            <Text style={styles.cardTitle}>{subscription.plan}</Text>
            <Text style={styles.cardDetails}>Data Limit: {subscription.dataLimit}</Text>
            <Text style={styles.cardDetails}>Minutes Limit: {subscription.minutesLimit}</Text>
            <Text style={styles.cardDetails}>Messages Limit: {subscription.messagesLimit}</Text>
            <Text style={styles.cardDetails}>
              Monthly Cost: ${subscription.monthlyCost.toFixed(2)}
            </Text>
            <View style={{ marginTop: 12 }}>
              <Button title='Buy' />
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    height: 60,
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDetails: {
    fontSize: 14,
    marginBottom: 4,
  },
})

export default SubscriptionList
