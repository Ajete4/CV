
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./assets/images/Myphoto.jpg')} 
          style={styles.photo} 
        />
        <Text style={styles.name}>Ajete Ibishi</Text>
        <Text style={styles.title}>Computer Science & Engineering Student</Text>
      </View>

      {/* Contact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <View style={styles.contactItem}>
          <Icon name="email-outline" size={20} color="#000" />
          <Text style={styles.contactText}>ajete.ibishi@gmail.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="phone" size={20} color="#000" />
          <Text style={styles.contactText}>(+383)49582452</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="linkedin" size={20} color="#000" />
          <Text style={styles.contactText}>linkedin.com/ajeteibishi</Text>
        </View>
      </View>

      {/* Hobbies */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hobbies</Text>
        <View style={styles.hobbiesContainer}>
          <View style={styles.hobby}>
            <Icon name="book-open" size={20} color="#000" />
            <Text style={styles.hobbyText}>Reading</Text>
          </View>
          <View style={styles.hobby}>
            <Icon name="airplane" size={20} color="#000" />
            <Text style={styles.hobbyText}>Traveling</Text>
          </View>
          <View style={styles.hobby}>
            <Icon name="music" size={20} color="#000" />
            <Text style={styles.hobbyText}>Music</Text>
          </View>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.eduItem}>SHMLM "Dr. Xheladin Deda" - 2022</Text>
        <Text style={styles.eduItem}>Bachelor of Computer Science & Engineering - 3rd Year (Expected 2026) </Text>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <Text style={styles.certItem}>Web Application Developer & Cloud Computing</Text>
        <Text style={styles.certItem}>ICT & Digital Skills Training  on Web Application  Development Professional</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.subTitle}>Soft Skills</Text>
        <Text>- Teamwork</Text>
        <Text>- Communication</Text>
        <Text>- Problem Solving</Text>
        <Text>- Time Management</Text>

        <Text style={styles.subTitle}>Hard Skills</Text>
        <Text>- Microsoft Office Suite</Text>
        <Text>- HTML, CSS, JavaScript</Text>
        <Text>- PHP, MySQL</Text>
        <Text>- C#</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8', 
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#D1D9E6',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#A1C6EA',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#555',
    marginTop: 3,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F3A93', 
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D9E6',
    paddingBottom: 3,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#444',
  },
  hobbiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  hobby: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  hobbyText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  eduItem: {
    marginBottom: 8,
    color: '#444',
  },
  certItem: {
    marginBottom: 8,
    color: '#444',
  },
  subTitle: {
    fontWeight: 'bold',
    marginTop: 12,
    color: '#1F3A93',
  },
});
