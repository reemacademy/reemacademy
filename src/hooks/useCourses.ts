import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from '../lib/axios';
import type { Course } from '../types/course';

export function useCourses() {
  const queryClient = useQueryClient();

  const { data: courses, isLoading } = useQuery('courses', async () => {
    const response = await api.get('/courses');
    return response.data;
  });

  const createCourse = useMutation(
    async (courseData: Partial<Course>) => {
      const response = await api.post('/courses', courseData);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('courses');
      },
    }
  );

  return {
    courses,
    isLoading,
    createCourse,
  };
}