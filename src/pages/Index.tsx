import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    { 
      icon: 'Scissors', 
      title: 'Пошив на заказ', 
      description: 'Создание уникальной одежды по вашим меркам и эскизам',
      price: 'от 8 000 ₽'
    },
    { 
      icon: 'Shirt', 
      title: 'Ремонт одежды', 
      description: 'Профессиональный ремонт любой сложности',
      price: 'от 500 ₽'
    },
    { 
      icon: 'Ruler', 
      title: 'Подгонка по фигуре', 
      description: 'Идеальная посадка вашей одежды',
      price: 'от 1 500 ₽'
    },
    { 
      icon: 'Sparkles', 
      title: 'Реставрация', 
      description: 'Возвращаем вторую жизнь любимым вещам',
      price: 'от 2 000 ₽'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Великолепная работа! Платье село идеально, качество пошива на высшем уровне. Спасибо за профессионализм!',
      date: '15 октября 2024'
    },
    {
      name: 'Мария Соколова',
      rating: 5,
      text: 'Очень довольна результатом! Быстро починили мою любимую куртку, теперь как новая. Обязательно вернусь снова.',
      date: '8 ноября 2024'
    },
    {
      name: 'Елена Васильева',
      rating: 5,
      text: 'Потрясающее ателье! Сшили костюм на свадьбу - все гости были в восторге. Рекомендую от всей души!',
      date: '22 октября 2024'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-cormorant">Atelier</h1>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">Услуги</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Контакты</a>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-cormorant font-bold mb-6 leading-tight">
                Искусство<br />создавать<br />совершенство
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Воплощаем ваши идеи в изысканную одежду с безупречным качеством и утонченным стилем
              </p>
              <Button size="lg" className="text-lg px-8">
                Записаться на консультацию
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/7cc7408f-13d4-4a5a-8ce9-32404b7d9f18/files/e491c058-bfd6-4ecd-8d7f-ed0a1582398b.jpg"
                alt="Atelier interior"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Профессиональный подход к каждой детали</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-cormorant font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-lg font-semibold text-secondary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Нам доверяют самое ценное</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-4 text-foreground/90">{testimonial.text}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Мы ответим на все ваши вопросы</p>
          
          <Card className="border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Анна Иванова"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем заказе..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-secondary" />
                  <span>Москва, ул. Тверская, 12</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-secondary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-secondary" />
                  <span>Пн-Сб: 10:00 - 20:00, Вс: выходной</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Atelier. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
